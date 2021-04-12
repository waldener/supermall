<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">分类</div></nav-bar>
    <div class="content">
      <tab-menu :category="category" @selectItem="selectItem"></tab-menu>
      <div class='right'>
        <tab-control
            ref="topTab"
            v-show="showTabControl"
            @tabClick="tabClick"
            :titles="['综合', '新品', '销量']" class="top-tab"></tab-control>
        <scroll id="tab-content"
                ref="scroll"
                :probe-type="3"
                :pull-up-load="true"
                @scroll="contentScroll"
                @pullingUp="">
          <tab-content-category :subcategory="showSubcategory" @imgLoad="imgLoad"/>
          <tab-control :titles="['综合', '新品', '销量']"
                       @tabClick="tabClick"
                       ref="contentTab"/>
          <goods-list :goods="showCategoryDetail"/>
        </scroll>
      </div>
    </div>
    <back-top v-show="showBackTop" @click.native="backTop"></back-top>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import Scroll from "../../components/common/bscroll/Scroll";
  import GoodsList from "../../components/content/goods/GoodsList";
  import TabControl from "../../components/content/tabControl/TabControl";

  import TabMenu from "./childComps/TabMenu";
  import TabContentCategory from "./childComps/TabContentCategory";

  import {getCategory,getCategoryDetail,getSubcategory} from "../../network/category";

  import {debounce} from "../../common/utils";
  import {backTopMixin,tabControlMixin} from "../../common/mixin";

  export default {
    name: "Category",
    components:{
      NavBar,
      TabMenu,
      Scroll,
      TabContentCategory,
      TabControl,
      GoodsList
    },
    mixins:[tabControlMixin,backTopMixin],
    data(){
      return {
        category:[],
        categoryData:{},
        currentIndex:-1,
        showTabControl:false,
        tabOffsetTop: 0,
      }
    },
    computed:{
      showSubcategory(){
        if(this.currentIndex == -1){
          return {}
        }
        return this.categoryData[this.currentIndex].subcategory
      },
      showCategoryDetail() {
        if (this.currentIndex === -1) return []
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods:{
      _getCategory() {
        getCategory().then(res => {
          //1.获取分类数据
          this.category = res.data.category.list
          //2.初始化每个类别的子数据
          for(let i = 0;i < this.category.length;i++){
            this.categoryData[i] = {
              subcategory:{},
              categoryDetail:{
                'pop':[],
                'new':[],
                'sell':[]
              }
            }
          }

          //3.请求第一个分类的数据
          this._getSubcategory(0)
        })
      },
      _getSubcategory(index) {
        this.currentIndex = index;
        const mailKey = this.category[index].maitKey
        getSubcategory(mailKey).then( res => {
          this.categoryData[index].subcategory = res.data
          //老师代码里的，意义不明,搞不懂
          this.categoryData = {...this.categoryData}

          this._getCategoryDetail('pop')
          this._getCategoryDetail('sell')
          this._getCategoryDetail('new')
        })
      },
      _getCategoryDetail(type){
        //1.获取请求miniwallkey
        const miniWallkey = this.category[this.currentIndex].miniWallkey
        //2.发送请求，传入miniwallkey和type
        getCategoryDetail(miniWallkey,type).then(res => {
          //3.将数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          console.log(res);
          
          this.categoryData = {...this.categoryData}
        })
      },
      //事件响应相关方法
      selectItem(index){
        this._getSubcategory(index)
      },

      //获取分类图片后刷新滚动条高度
      imgLoad(){
        this.tabOffsetTop = this.$refs.contentTab.$el.offsetTop;
      },

      contentScroll(position) {
        this.showBackTop = position.y <= -1000
        this.showTabControl = position.y <= -this.tabOffsetTop
      },
    },
    created() {
      //1.请求分类数据
      this._getCategory()
      // 2.监听图片加载完成
      this.$bus.$on('imgLoad', () => {
        this.$refs.scroll.refresh()
      })
    },
  }
</script>

<style scoped>
  #category{
    height: 100vh;
  }
  .nav-bar{
    background: var(--color-tint);
    color: #fff;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

    display: flex;
  }
  .right{
    flex: 1;
  }

  /*重点：因为分类界面要分成两栏，一栏菜单，一栏网页，都需要使用scroll组件，所以两栏统一设置一个content，然后使
  用flex布局，左边为菜单栏，右边为分类信息，这时由于分类信息栏的scroll组件继承了content的样式，所以在使用两个
  tab-control组件实现该组件的悬停效果时，悬停显示的那个tab-control会把整个scroll挤下来，所以需要给它设置fixed
  属性脱离标准流，并且以整个页面为参考设置top，left和right才能正常实现该功能。*/
  .top-tab{
    position: fixed;
    left: 100px;
    right: 0;
    top:44px;
    z-index: 9;
  }
  #tab-content {
    height: 100%;
  }
</style>
