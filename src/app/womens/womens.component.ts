import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent implements OnInit {

  constructor() { }

  railItems=[
    {
      'name':"Kurti",'sp':600,'mrp':800,'discount':10, 
      'image':'https://i.pinimg.com/736x/13/82/53/138253df8b789aa9b8c0f58d5123703b.jpg',
      
    },
    
 {
    'name':"Kurti",'sp':500,'mrp':700,'discount':10, 
    'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIL3LsllCDpMEGydTReTGvXwl4rUGqSmYJwQ&usqp=CAU',
    
  },
  {
    'name':"Kurti",'sp':800,'mrp':900,'discount':10, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/41HljisScyL.jpg',
    
  },
  {
    'name':"Kurti",'sp':1000,'mrp':1200,'discount':10, 
    'image':'https://i.pinimg.com/originals/29/80/91/298091a586e19e7e0ac52d7ae3be9b6b.jpg',
    
  },

  

  {
    'name':"Top",'sp':900,'mrp':1000,'discount':10, 
    'image':'https://m.media-amazon.com/images/I/71GV5zU1Z7L._UL1500_.jpg',
    
  },

  {
    'name':"Lehanga",'sp':4000,'mrp':4200,'discount':20, 
    'image':'https://assets0.mirraw.com/images/7377532/image_zoom.jpeg?1568211581',
    
  },

  {
    'name':"Lehanga",'sp':2500,'mrp':2700,'discount':20, 
    'image':'https://cdn.sareeka.com/image/cache/data2020/grey-thread-work-lehenga-choli-146886-1000x1375.jpg',
    
  },

  {
    'name':"Lehanga",'sp':3000,'mrp':3400,'discount':20, 
    'image':'https://cdn.shopify.com/s/files/1/1105/1322/products/MauvePurpleDesignerHeavyEmbroideredNetWedding_BridalLehenga-Saira_sBoutique.jpg?v=1584508257',
    
  },
  {
    'name':"Lehanga",'sp':2800,'mrp':3200,'discount':20, 
    'image':'https://cdn.shopify.com/s/files/1/1072/7908/products/fashionvibes-lehenga-sequin-and-zari-work-georgette-lehenga-14085450596401_1024x1024.jpg?v=1597762413',
    
  },

  {
    'name':"Lehanga",'sp':5000,'mrp':5300,'discount':20, 
    'image':'https://static.india.com/wp-content/gallery/lehenga-designs-2020/lehenga.jpg',
    
  },


  {
    'name':"Designer Saree",'sp':1000,'mrp':1300,'discount':20, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/81JUlRueJ6L._UL1500_.jpg',
  
  },

  {
    'name':"Designer Saree",'sp':3000,'mrp':3300,'discount':20, 
    'image':'https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPANAND-SAREESANAN85396F06098F6/1597423493942_0..jpg',
    
  },
  {
    'name':"Designer Saree",'sp':1700,'mrp':1900,'discount':20, 
    'image':'https://i.pinimg.com/originals/ba/eb/31/baeb311b92c551d68bd37680009b3cfb.jpg',
    
  },
  {
    'name':"Designer Saree",'sp':1500,'mrp':1700,'discount':20, 
    'image':'https://i.pinimg.com/236x/69/2b/db/692bdb3082c2e3665f95affb26499e63--online-shopping-sarees-sarees-online.jpg',
    
  },
  {
    'name':"Designer Saree",'sp':2000,'mrp':2200,'discount':20, 
    'image':'https://i.pinimg.com/originals/e7/14/6b/e7146b47e924218f89eee619a1285da7.jpg',
    
  },


  {
    'name':"Western",'sp':1000,'mrp':200,'discount':20, 
    'image':'https://www.jiofab.com/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/b/l/blue-women-and-girls-sleeveless-western-gown-jf502213.jpg',
    
  },

  {
    'name':"Western",'sp':1200,'mrp':1000,'discount':20, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/61%2BQLdkvVWL._UL1500_.jpg',
    
  },

  {
    'name':"Western",'sp':1800,'mrp':1600,'discount':20, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/41DTxg3A6zL.jpg',
    
  },

  {
    'name':"Western",'sp':1900,'mrp':1700,'discount':20, 
    'image':'https://assets.ajio.com/medias/sys_master/root/hff/h07/16211011534878/-1117Wx1400H-461149056-pink-MODEL.jpg',
    
  },

  {
    'name':"Western",'sp':800,'mrp':900,'discount':20, 
    'image':'https://img.shopstyle-cdn.com/sim/ac/0a/ac0af4c43205e7d0ec3d431bcab05798_xlarge/levis-r-kids-short-sleeve-western-dress-big-kids-cobalt-sky-girls-clothing.jpg',
    
  },

  {
    'name':"Jeans",'sp':1200,'mrp':1400,'discount':15, 
    'image':'data:image/jpeg;base64,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',
    
  }, 
  {
    'name':"Jeans",'sp':1800,'mrp':1600,'discount':15, 
    'image':'https://lh3.googleusercontent.com/YneAfC2cdzcRrgpVO7myUB1vjWUE8ue52lVayL6v5cQ40oDxF4InVKRrgdGZ8HKb2ijYOyXDmT63bQw8LyYve8voADE=w1000',
    
  },
  {
    'name':"Jeans",'sp':1400,'mrp':1200,'discount':15, 
    'image':'https://oldnavy.gap.com/webcontent/0016/296/690/cn16296690.jpg',
    
  },
  {
    'name':"Jeans",'sp':1000,'mrp':1200,'discount':15, 
    'image':'https://www.justjeans.com.au/JJ/aurora/images/products/large/169913_rebelblue_l.jpg?i10c=img.resize(width:256)',
    
  },
  {
    'name':"Jeans",'sp':1000,'mrp':1300,'discount':20, 
    'image':'https://img3.junaroad.com/uiproducts/16529567/pri_175_p-1566473224.jpg',
    
  },

  {
    'name':"Dhupatta",'sp':1200,'mrp':1400,'discount':15, 
    'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLNZRVaIhAUHiymAI6pXEIxfjQPj6cNYpsWyk6X6pvwVwVfrYSYerj6xKXNY&usqp=CAc',
    
  },
  {
    'name':"Dhupatta",'sp':1000,'mrp':1200,'discount':15, 
    'image':'http://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/ProductImages/Source/indigo15745ss20blu-1.jpg',
    
  },

  {
    'name':"Dhupatta",'sp':600,'mrp':800,'discount':15, 
    'image':'https://i.pinimg.com/originals/f2/9f/3e/f29f3efd4a94002e5e7ba01b055f55ef.jpg',
    
  },
  {
    'name':"Dhupatta",'sp':500,'mrp':600,'discount':15, 
    'image':'https://www.jaipurfabric.com/uploads/jaipurfabric/products/dpt027copy-472690_l.jpg',
    
  },
  {
    'name':"Dhupatta",'sp':1000,'mrp':1300,'discount':15, 
    'image':'https://img.looksgud.com/upload/item-image/2374/1ew7l/1ew7l-generic-asha-creation-women-s-bandhani-silk-dupatta-with-bandhej_300x300_0.jpg',
    
  },




]
  ngOnInit(): void {
  }

}
