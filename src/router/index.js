import Vue from 'vue'

import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld'

import jolly from '../components/webScr'

import kolly from '../components/dropdown'

import lolly from '../components/errorhand'

import polly from '../components/BTable'

import rolly from '../components/bforms'

import yolly from '../components/refsparent'

import tolly from '../components/arrowfunc'

import nolly from '../components/invoke'
import zolly from '../components/fetchh'
import olly from '../components/bootu'
import dolly from '../components/alphabet'
import volly from '../components/crudd'
import Solly from '../components/domain'
import Golly from  '../components/dropdow'
import toff from  '../components/newfile'
import buff from  '../components/workout'



Vue.use(Router)

const routes = [

{

path:'/',

name:'Home',

component:HelloWorld

},

{

path:'/webscr',

name:'tableData',

component:jolly

},

{
    path:'/dropD',

name:'someThing',

component:kolly

},
{
    path:'/Error',

name:'tenthQues',

component:lolly

},
{
    path:'/btable',

name:'Jolly',

component:polly

},{
    path:'/bform',

name:'formS',

component:rolly

}
,{
    path:'/refs',

name:'subasH',

component:yolly

}
,{
    path:'/arrow',

name:'FunC',

component:tolly

}
,{
    path:'/invoke',

name:'FifthQ',

component:nolly


}
,{
    path:'/call',

name:'QuesSA',

component:zolly

},{
    path:'/boot',

name:'UtubE',

component:olly

}
,{
    path:'/sort',

name:'AppU',

component:dolly

}
,{
    path:'/crud',

name:'QueS3',

component:volly

}
,
{
    path:'/last',

name:'DomaN',

component:Solly

}
,
{
    path:'/dropp',

name:'QueS6',

component:Golly

},
{
    path:'/today',

name:'dolI',

component:toff

}
,{
    path:'/workout',

name:'worK',

component:buff

}
]


let router = new Router({routes})

export default router