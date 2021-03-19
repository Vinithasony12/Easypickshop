import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jwellery',
  templateUrl: './jwellery.component.html',
  styleUrls: ['./jwellery.component.css']
})
export class JwelleryComponent implements OnInit {

  constructor() { }
  railItems=[
    {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/71NnFhMamIL._UL1110_.jpg',
    
  },

  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://everstylish.com/pub/media/catalog/product/cache/0f8c9845bfabb36fc9eaa200154897c4/j/e/jew9901631-3.jpg',
    
  },
  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://www.fashioncrab.com/wp-content/uploads/2019/05/Big-Chandbali-Earrings-1200x1200.jpg',
    
  },
  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://rukminim1.flixcart.com/image/400/400/jri3jww0/earring/m/u/m/dj224-divastri-original-imafd98jdtn4qyqc.jpeg?q=90',
    
  },
  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://imgshopimages.lbb.in/catalog/product/r/2/r2.jpg',
    
  },
  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2019/10/25/01e78223-ead0-4b15-bbb2-1de8936fbc411571963095390-1.jpg',
    
  },
  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://www.kalyanjewellers.net/images/Jewellery/Earrings/images/lovey-dovey-day-diamond-earrings.jpg',
    
  },

  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://kinclimg2.bluestone.com/f_jpg,c_scale,w_515,b_rgb:f0f0f0/giproduct/BISP0207S19_YAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-9900.png',
    
  },
  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://media.istockphoto.com/photos/pair-of-emerald-earrings-isolated-on-white-background-picture-id1145185972?k=6&m=1145185972&s=612x612&w=0&h=S-eBn9mIjo6T85wRaEM0lnoy4PwvAq5Oj_XfxOX68Pc=',
    
  },
  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlIH-lOYoLWpeFX57ljFxjWQg3pSESI1xZg&usqp=CAU',
    
  },
  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://5.imimg.com/data5/WW/DH/AD/SELLER-41849197/designer-gold-plated-jhumka-earrings-500x500.jpg',
    
  },
  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'data:image/jpeg;base64,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',
    
  },
  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://everstylish.com/pub/media/catalog/product/cache/689aad3dff30df62a7b33021fe130799/j/e/jew5501611-3.jpg',
    
  },
  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://cdn.shopify.com/s/files/1/1501/0634/products/antique-gold-finish-peacock-with-jali-net-design-earringjhumka-with-crystals-eai08-240-2672n-jhumkas-earrings-griiham.jpg?v=1597904742',
    
  },
  {
    'name':"Ear rings",'sp':400,'mrp':600,'discount':10, 
    'image':'https://cdn.shopify.com/s/files/1/1223/0734/products/9007777602_1597682754_768x.jpg?v=1609181591',
    
  },

  {
    'name':"Bracelet",'sp':300,'mrp':400,'discount':10, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/71JNybjDNAL._UL1500_.jpg',
    
  },
  {
    'name':"Bracelet",'sp':300,'mrp':400,'discount':10, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/61q5PfW688L._UL1500_.jpg',
    
  }, 
   {
    'name':"Bracelet",'sp':300,'mrp':400,'discount':10, 
    'image':'https://5.imimg.com/data5/CS/VD/YX/SELLER-23987104/latest-real-diamond-bracelet-for-women-500x500.jpg',
    
  },  
  {
    'name':"Bracelet",'sp':300,'mrp':400,'discount':10, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/41m0-b6PDkL.jpg',
    
  }, 
   {
    'name':"Bracelet",'sp':300,'mrp':400,'discount':10, 
    'image':'https://4.imimg.com/data4/DO/SD/MY-28372632/ladies-designer-bracelet-500x500.jpg',
    
  }, 
   {
    'name':"Bracelet",'sp':300,'mrp':400,'discount':10, 
    'image':'https://i.pinimg.com/originals/bf/a6/3d/bfa63da9cf9a89fb1734c3237cfc13ce.jpg',
    
  },

  {
    'name':"Bracelet",'sp':300,'mrp':400,'discount':10, 
    'image':'https://ae01.alicdn.com/kf/HTB1YNsEKpXXXXbvXVXXq6xXFXXXf/Women-s-brand-new-anklet-bracelet-gold-color-anklet-fashion-foot-jewelry-w-heart-designer-items.jpg',
    
  },
  {
    'name':"Bracelet",'sp':300,'mrp':400,'discount':10, 
    'image':'https://charujewelsonline.com/wp-content/uploads/2016/10/CJBR0136-Y-600x600.jpg',
    
  },

  {
    'name':"Bracelet",'sp':300,'mrp':400,'discount':10, 
    'image':'http://i.ebayimg.com/images/i/191584799406-0-1/s-l1000.jpg',
    
  },

  {
    'name':"Bracelet",'sp':300,'mrp':400,'discount':10, 
    'image':'https://qph.fs.quoracdn.net/main-qimg-a88b555c13b911ffaed31699cf81ae31',
    
  },

  {
    'name':"Necklace",'sp':4000,'mrp':4400,'discount':20, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/41EwNiIGVzL.jpg',
    
  },
  {
    'name':"Necklace",'sp':4000,'mrp':4400,'discount':20, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/71VQnmJe1wL._UL1280_.jpg',
    
  },
  {
    'name':"Necklace",'sp':4000,'mrp':4400,'discount':20, 
    'image':'https://www.goldgiftideas.com/wp-content/uploads/2020/10/Pearl-Necklace-Set-with-Earrings-for-Women-and-Girls_Blue.jpg',
    
  },
  {
    'name':"Necklace",'sp':4000,'mrp':4400,'discount':20, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/81bpbfO2LiL._UL1500_.jpg',
    
  },
  {
    'name':"Necklace",'sp':4000,'mrp':4400,'discount':20, 
    'image':'https://5.imimg.com/data5/TK/JY/GZ/ANDROID-69419458/product-jpeg-500x500.jpg',
    
  },
  {
    'name':"Chains",'sp':1000,'mrp':1000,'discount':10, 
    'image':'https://5.imimg.com/data5/PI/IH/MY-2/designer-gold-chain-500x500.jpg',
    
  },

  {
    'name':"Chains",'sp':1000,'mrp':1000,'discount':10, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/617zfMCpyXL._AC_UL1500_.jpg',
    
  },
  {
    'name':"Chains",'sp':1000,'mrp':1000,'discount':10, 
    'image':'https://cdn11.bigcommerce.com/s-thiekn1go9/images/stencil/1280x1280/products/988/1642/Girls_heart_necklace_w_diamond_14k_gold_web__72389.1574532761.jpg?c=2',
    
  },
  {
    'name':"Chains",'sp':1000,'mrp':1000,'discount':10, 
    'image':'https://stylesatlife.com/wp-content/uploads/2016/10/Rhodium-Gold-Chain-Designs-14.jpg',
    
  },
  {
    'name':"Chains",'sp':1000,'mrp':1000,'discount':10, 
    'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOT3Nw8-8_xDOZ5mZ3nTN5xd74BQtKib4sPA&usqp=CAU',
    
  },

  

]
  ngOnInit(): void {
  }

}

  