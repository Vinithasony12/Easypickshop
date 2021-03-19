import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {

  constructor() { }
  railItems=[
    {
    'name':"T-shirt",'sp':500,'mrp':700,'discount':15, 
    'image':'https://www.beyoung.in/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/g/u/gully_boy_black_men_mockup_1.jpg',
    
  },
  {
    'name':"T-shirt",'sp':500,'mrp':700,'discount':15, 
    'image':'https://i.pinimg.com/736x/2f/97/83/2f97837ac613d0cccd067d8665afa6b0.jpg',
    
  },
  {
    'name':"T-shirt",'sp':500,'mrp':700,'discount':15, 
    'image':'https://i.pinimg.com/474x/06/e3/48/06e348c7243741b090d4310fd2104f9e.jpg',
    
  },
  {
    'name':"T-shirt",'sp':500,'mrp':700,'discount':15, 
    'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWuqwh2BfCfKRbk-YXLHJ2hD8x_MqNjrr3g&usqp=CAU',
    
  },
  {
    'name':"T-shirt",'sp':500,'mrp':700,'discount':15, 
    'image':'https://cdn.vmartretail.com/images1/thumbnails/97005/640/1/143656009-97005407-1604471077.jpg',
    
  },

  {
    'name':"T-shirt",'sp':500,'mrp':700,'discount':20, 
    'image':'https://cdn.shopify.com/s/files/1/0266/6276/4597/products/100001_300820274001_1.jpg?v=1595436170',
    
  },

  {
    'name':"T-shirt",'sp':500,'mrp':700,'discount':20, 
    'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkvO0jqwmkR1DgkVnOry5mC7H79S4QzCt0g&usqp=CAU',
    
  },
  {
    'name':"T-shirt",'sp':500,'mrp':700,'discount':20, 
    'image':'https://cdn.shopify.com/s/files/1/2275/0137/products/JMLT2350_HERITAGE-LONG-SLEEVE-TEE_Mens_TEES_MALIBU-RED_Back_flt_SM_Grey_480x_crop_center.jpg?v=1611951062',
    
  },
  {
    'name':"T-shirt",'sp':500,'mrp':700,'discount':20, 
    'image':'https://cdn.shopify.com/s/files/1/0239/5615/products/3924_600x.jpg?v=1596750808',
    
  },
  {
    'name':"T-shirt",'sp':500,'mrp':700,'discount':20, 
    'image':'https://cdn.shopify.com/s/files/1/0266/6276/4597/products/100001_300818945003_1_2ee344ec-1a9a-40b0-9530-1ca24f47a79a.jpg?v=1595408276',
    
  },
  {
    'name':"T-shirt",'sp':500,'mrp':700,'discount':20, 
    'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTurvPgM6VBYnMjtlX-XeT4uN0FiNB5VXfSXw&usqp=CAU',
    
  },

  {
    'name':"Sherwani",'sp':2500,'mrp':2700,'discount':10, 
    'image':'https://i.pinimg.com/originals/1c/df/67/1cdf67f1e27da0f8d36f1d382aa729c7.jpg',
    
  },
  {
    'name':"Sherwani",'sp':2500,'mrp':2700,'discount':10, 
    'image':'https://i.pinimg.com/originals/32/27/3b/32273b4ea59fbc30222ea41409d59ec9.jpg',
    
  },

  {
    'name':"Sherwani",'sp':2500,'mrp':2700,'discount':10, 
    'image':'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2019/9/13/5dc36234-1a87-41cc-befd-e5e701d12cbc1568318662766-1.jpg',
    
  },

  {
    'name':"Sherwani",'sp':2500,'mrp':2700,'discount':10, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/711C4wo3YRL._UY550_.jpg',
    
  },

  {
    'name':"Sherwani",'sp':2500,'mrp':2700,'discount':10, 
    'image':'https://5.imimg.com/data5/IN/EY/MY-15653545/nawabi-style-wedding-wear-mens-sherwanis-collection-500x500.jpg',
    
  },

  {
    'name':"Sherwani",'sp':2500,'mrp':2700,'discount':10, 
    'image':'https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/07/heaviliy-embroidery-683x1024.jpg',
    
  },
  {
    'name':"Sherwani",'sp':2500,'mrp':2700,'discount':10, 
    'image':'https://cdn.shopify.com/s/files/1/0162/2116/articles/10_Regal_Groom_Wears_to_Achieve_A_Dapper_Look_Without_Burning_Cash_300x300.jpg?v=1556180646',
    
  },

  {
    'name':"Sherwani",'sp':2500,'mrp':2700,'discount':10, 
    'image':'https://5.imimg.com/data5/FC/WR/FN/SELLER-57203920/embroidered-men-s-traditional-sherwani-500x500.jpg',
    
  },
  {
    'name':"Sherwani",'sp':2500,'mrp':2700,'discount':10, 
    'image':'https://www.menweddingwear.com/images/gallery-1.jpg',
    
  },
]
  ngOnInit(): void {
  }

}

