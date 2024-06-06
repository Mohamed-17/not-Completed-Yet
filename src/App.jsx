import { Children, useState } from 'react'
import './app.scss'
import { FirstBar } from './components/firstBar/FirstBar';
import { Layout } from './components/layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Trackorder } from './components/trackorder/Trackorder';
import { ReturnExchange } from './components/returnexchange/ReturnExchange';
import { ContactUs } from './components/contactus/ContactUs';
import {Navbar} from '/src/components/navbar/Navbar'
import { Jood } from './components/jood/Jood';
import { Login } from './components/login/Login';
import { Cart } from './components/cart/Cart';
import {Apple} from './components/searchMenu/Apple'
import {Samsung} from './components/searchMenu/Samsung'
import {Lg} from './components/searchMenu/Lg'
import {Class} from './components/searchMenu/Class'
import {Sony} from './components/searchMenu/Sony'
import {Gree} from './components/searchMenu/Gree'
import {Huawei} from './components/searchMenu/Huawei'
import {Philips} from './components/searchMenu/Philips'
import { Smart } from './components/searchMenu/Smart';
import { Electric } from './components/searchMenu/Electric';
import { Mobiles } from './components/searchMenu/Mobiles';
import { Tvs } from './components/searchMenu/Tvs';
import { ACs } from './components/searchMenu/ACs';
import { Washing } from './components/searchMenu/Washing';
import { Laptops } from './components/searchMenu/Laptops';
import { Gaming } from './components/searchMenu/Gaming';
import { ExtraServices } from './components/wishListMenu/ExtraServices';
import { Baseeta } from './components/wishListMenu/Baseeta';
import { ExtraSetup } from './components/extra/ExtraSetup';
import { ExtraSafeGuard2 } from './components/extra/ExtraSafeGuard2';
import { ExtraCare } from './components/extra/ExtraCare';
import {FreeDelivery} from './components/delivery/FreeDelivery'
import {SpeedDelivery} from './components/delivery/SpeedDelivery'
import {Collect} from './components/delivery/Collect'
import { PMG } from './components/price/PMG';
import { Flexiblepayment } from './components/Flexiblepayment/Flexiblepayment';
import { Company } from './components/footer/Company';
import { Corporate } from './components/footer/Corporate';
import { Maintenance } from './components/footer/Maintenance';
import { Tamara } from './components/footer/Tamara';
import { Rights } from './components/footer/Rights';
import { Store } from '@mui/icons-material';
import { Privacy } from './components/footer/Privacy';
import { Sitemap } from './components/footer/Sitemap';
import { Terms } from './components/footer/Terms';
import { Home } from './components/home/Home';
import { MegaSale } from './components/mega/MegaSale';
import { Special } from './components/special/Special';
import { Cashback } from './components/cashback/Cashback';
import { Tabby } from './components/tabby/Tabby';
import { Tablets } from './components/tablets/Tablets';
import { WhiteGoods } from './components/whitegoods/WhiteGoods';
import { Electronics } from './components/electronics/Electronics';
import { SmallAppliances } from './components/smalappliances/SmallAppliances';
import { ElectronicGames } from './components/electronicgames/ElectronicGames';
import { Automation } from './components/automation/Automation';
import { Computer } from './components/computer/Computer';
function App() {
  
  const routing = createBrowserRouter([{
    path : '/',
    element : <Layout/>, 
    children : [{
      path : "/trackorder",
      element : <Trackorder/>
    },
    {
      index : true,
      element : <Home/>
    },
  {
    path : "/returnexchange",
    element : <ReturnExchange/>
  },
  {
    path : "/faqs",
    element : <ContactUs/>
  },{
    path : "/jood/benefits",
    element : <Jood/>
  },{
    path : "/login",
    element : <Login/>
  },{
    path : "/cart",
    element : <Cart/>
  },{
    path : "/popular/apple",
    element : <Apple/>
  }
  ,{
    path : "/popular/Samsung",
    element : <Samsung/>
  }
  ,{
    path : "/popular/lg",
    element : <Lg/>
  }
  ,{
    path : "/popular/class-pro",
    element : <Class/>
  }
  ,{
    path : "/popular/sony",
    element : <Sony/>
  }
  ,{
    path : "/popular/gree",
    element : <Gree/>
  }
  ,{
    path : "/popular/huawei",
    element : <Huawei/>
  }
  ,{
    path : "/popular/philips",
    element : <Philips/>
  }
  ,{
    path : "/trending/mobiles",
    element : <Mobiles/>
  }
  ,{
    path : "/trending/tvs",
    element : <Tvs/>
  }
  ,{
    path : "/trending/acs",
    element : <ACs/>
  }
  ,{
    path : "/trending/washing-machines",
    element : <Washing/>
  }
  ,{
    path : "/trending/laptops",
    element : <Laptops/>
  }
  ,{
    path : "/trending/gaming-consoles",
    element : <Gaming/>
  },{
    path : "/trending/electric-scooters",
    element : <Electric/>
  },{
    path : "/trending/smart-home",
    element : <Smart/>
  },{
    path : '/extraservices',
    element : <ExtraServices/>
  },{
    path : '/baseeta',
    element : <Baseeta/>
  },
  {
    path : '/extrasetup',
    element : <ExtraSetup/>
  },{
    path : '/extrasafeguard2',
    element : <ExtraSafeGuard2/>
  },{
    path : '/extracare',
    element : <ExtraCare/>
  },{
    path : '/extrarepair',
    element : <ExtraSetup/>
  },{
    path : '/delivery',
    element : <FreeDelivery/>
  }
  ,{
    path : '/delivery/speed',
    element : <FreeDelivery/>
  },
  
  {
    path : '/CFS',
    element : <Collect/>
  }, {
    path : '/PMG',
    element : <PMG/>
  },{
    path :"/payment",
    element : <Flexiblepayment/>
  }
  ,{
    path : '/aboutextra',
    element : <Company/>
  }
  ,{
    path : '/corporateSales',
    element : <Corporate/>
  }
  ,{
    path : '/maintenance',
    element : <Maintenance/>
  }
  ,{
    path : '/tamaraterms',
    element : <Tamara/>
  }
  ,{
    path : '/yourrights',
    element : <Rights/>
  }
  ,{
    path : '/store-finder',
    element : <Store/>
  }
  ,{
    path : '/privacypolicy',
    element : <Privacy/>
  }
  ,{
    path : '/sitemap',
    element : <Sitemap/>
  }
  ,{
    path : '/terms',
    element : <Terms/>
  },
  {
    path : "/mega-sale/cp/8018",
    element : <MegaSale/>
  },
  {
    path : "/special-offer/cp/8025",
    element : <Special/>
  }
  , {
    path : "/cashback",
    element : <Cashback/>
  },{
    path : "/tabbyterms"
    , element : <Tabby/>
  },{
    path : "/apple/b/APPLE"
    , element : <Apple/>
  },{
    path : "/mobiles-tablets",
    element : <Tablets/>
  },{
    path : "/white-goods",
    element : <WhiteGoods/>
  },{
    path : "/electronics",
    element : <Electronics/>
  },{
    path : "/computer",
    element : <Computer/>
  },{
    path : "/small-appliances",
    element : <SmallAppliances/>
  },{
    path : "/electronic-games",
    element : <ElectronicGames/>
  },{
    path : "/home-automation",
    element : <Automation/>
  },{
    path : "/trade-in",
    element : "/TradeIn"
  }
  ]
  }])
  return (
  <RouterProvider router={routing}>
  <Layout/>
  </RouterProvider>
  )
}

export default App
