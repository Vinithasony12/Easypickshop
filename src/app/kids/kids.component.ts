import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  constructor() { }
  railItems=[

    {
      'name':"Western",'sp':1900,'mrp':700,'discount':10, 
      'image':'https://n1.sdlcdn.com/imgs/i/2/5/ElegantFancy-Kids-Girls-Western-Wear-SDL450969877-1-4de03.jpeg',
      
    },
    {
      'name':"Western",'sp':1300,'mrp':1600,'discount':20, 
      'image':'https://images-na.ssl-images-amazon.com/images/I/81XY9P59k8L._UL1500_.jpg',
      
    },
    {
      'name':"Western",'sp':1400,'mrp':1200,'discount':10, 
      'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoFRF74tkSeupjuOyaWzfEXY-pSUi3E1pWw&usqp=CAU',
      
    },

    {
      'name':"Western",'sp':900,'mrp':700,'discount':10, 
      'image':'https://images-na.ssl-images-amazon.com/images/I/71y8lWOaiRL._UL1500_.jpg',
      
    },

    {
      'name':"Western",'sp':900,'mrp':700,'discount':10, 
      'image':'https://www.affordable.pk/front/images/ahomepage/Girls-top.jpg',
      
    },

    {
      'name':"Frock",'sp':900,'mrp':700,'discount':10, 
      'image':'https://i.pinimg.com/474x/c6/85/3f/c6853fcacda93143aef8297d856f03a6.jpg',
      
    },
  {
    'name':"Frock",'sp':1000,'mrp':1200,'discount':10, 
    'image':'https://5.imimg.com/data5/QS/SJ/UX/SELLER-9197598/princess-fairy-gown-500x500.jpg',
    
  },
  {
    'name':"Frock",'sp':1100,'mrp':1000,'discount':10, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/41KyqkfwItL.jpg',
    
  },

  {
    'name':"Frock",'sp':800,'mrp':900,'discount':10, 
    'image':'https://stylesatlife.com/wp-content/uploads/2018/04/Baby-Frock-with-Heavy-Work.jpg',
    
  },
  {
    'name':"Frock",'sp':900,'mrp':1100,'discount':10, 
    'image':'https://cpimg.tistatic.com/05868562/b/4/Kids-frock.jpg',
    
  },
  
  {
    'name':"Lehanga",'sp':900,'mrp':1100,'discount':10, 
    'image':'https://www.aishwaryadesignstudio.com/content/images/thumbs/0077341_classy-peach-grey-designer-kids-wear-lehenga-choli-set.jpeg',
    
  },
  {
    'name':"Lehanga",'sp':900,'mrp':1100,'discount':10, 
    'image':'https://m.media-amazon.com/images/I/61s0YB0ZWgL._UL1058_.jpg',
    
  },

  {
    'name':"Lehanga",'sp':900,'mrp':1100,'discount':10, 
    'image':'https://i.etsystatic.com/23659727/r/il/0caeb2/2386639964/il_570xN.2386639964_fbnm.jpg',
    
  },
  {
    'name':"Lehanga",'sp':900,'mrp':1100,'discount':10, 
    'image':'https://www.aishwaryadesignstudio.com/content/images/thumbs/0077946_blue-color-party-wear-kids-lehenga-choli_324.jpeg',
    
  },
  {
    'name':"Lehanga",'sp':900,'mrp':1100,'discount':10, 
    'image':'https://assets.panashindia.com/media/catalog/product/cache/1/small_image/262x377/9df78eab33525d08d6e5fb8d27136e95/1/9/199kw05-nckskd058.jpg',
    
  },
  {
    'name':"Sherwani",'sp':2200,'mrp':2000,'discount':10, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/61QITBRbHiL._UL1280_.jpg',
    
  },
  {
    'name':"Sherwani",'sp':1500,'mrp':1800,'discount':10, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/91JLVOuUeUL._UY550_.jpg',
    
  },
  {
    'name':"Sherwani",'sp':1300,'mrp':1500,'discount':10, 
    'image':'https://assets0.mirraw.com/images/6416593/606-COFFEE-A_large.jpg?1537027328',
    
  },
  {
    'name':"Sherwani",'sp':1000,'mrp':1200,'discount':10, 
    'image':'https://www.bigbindi.com/media/catalog/product/cache/6/image/1100x/040ec09b1e35df139433887a97daa66f/R/T/RT-44171.jpg',
    
  },
  {
    'name':"Sherwani",'sp':1600,'mrp':1400,'discount':10, 
    'image':'https://www.bigbindi.com/media/catalog/product/cache/6/image/1100x/040ec09b1e35df139433887a97daa66f/R/T/RT-44161.jpg',
    
  },

  {
    'name':"Sherwani",'sp':1700,'mrp':1500,'discount':10, 
    'image':'https://n1.sdlcdn.com/imgs/h/r/7/2-in-1-Kids-Sherwani-SDL479693936-1-cd624.png',
    
  },
  {
    'name':"Sherwani",'sp':1200,'mrp':1400,'discount':10, 
    'image':'https://i.etsystatic.com/18783130/d/il/58df26/2543373337/il_340x270.2543373337_b8xq.jpg?version=0',
    
  },
  

  {
    'name':"Sherwani",'sp':2200,'mrp':2400,'discount':10, 
    'image':'https://assets0.mirraw.com/images/6416829/644-RED-A_zoom.jpg?1537028925',
    
  },
  {
    'name':"Sherwani",'sp':1800,'mrp':2000,'discount':10, 
    'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBeWf0qjvMWQ9gPKkqWpgkaFncBIA1oTiL6g&usqp=CAU',
    
  },
  {
    'name':"Sherwani",'sp':1200,'mrp':1400,'discount':10, 
    'image':'https://i.etsystatic.com/18783130/d/il/58df26/2543373337/il_340x270.2543373337_b8xq.jpg?version=0',
    
  },
  {
    'name':"western",'sp':1500,'mrp':1700,'discount':10, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/81T9k3QhvpL._UL1500_.jpg',
    
  },

  {
    'name':"western",'sp':1500,'mrp':1700,'discount':10, 
    'image':'https://images-na.ssl-images-amazon.com/images/I/61Ynpp7Jt4L._UY445_.jpg',
    
  },
  {
    'name':"western",'sp':1500,'mrp':1700,'discount':10, 
    'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZ8Wo-PCL8IVYo4OzwVME6iZnBA0Lblgk2g&usqp=CAU',
    
  },
  {
    'name':"western",'sp':1500,'mrp':1700,'discount':10, 
    'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcBNxRJuDFCZaSN1MVV7CCtbejIZoqUXrhw&usqp=CAU',
    
  },

  
  
]
  ngOnInit(): void {
  }

}

  