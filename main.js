
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
    var url = tabs[0].url;

//Esconde as páginas não necessárias
changeToPg1();

console.log(url);

let idNr = "";

if(url.search("MLB-") > 0){
  let positionTxt = parseInt(url.search("MLB-")) + 4;
  idNr = url.substr(parseInt(positionTxt), 10);
};

if(url.search("item_id:MLB") > 0){
  let positionTxt = parseInt(url.search("item_id:MLB")) + 11;
  idNr = url.substr(parseInt(positionTxt), 10);
};

if(url.search("item_id=MLB") > 0){
  let positionTxt = parseInt(url.search("item_id=MLB")) + 11;
  idNr = url.substr(parseInt(positionTxt), 10);
};


// Define the API URL
const objApi = "https://api.mercadolibre.com/items/MLB" + idNr;


// Make a GET request
fetch(objApi)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    //console.log(data);
          
    let date_created_days = (((new Date() -  new Date(data.date_created)) /  (1000 * 3600 * 24)).toFixed(0));
    
    let date_created_month = 0;
    date_created_days > 30 ? date_created_month = (date_created_days/365.25*12).toFixed(1) : date_created_month = 0;
    
    let txt_month = "";
    date_created_month > 0 ? txt_month = " | " + date_created_month + " mes": txt_month = txt_month;
    date_created_month > 1 ? txt_month = " | " + date_created_month + " meses" : txt_month = txt_month;
    
    document.getElementById("date_created_days").innerHTML =  "Criado há <b>" + date_created_days + " dias" + txt_month + "</b>";
    document.getElementById("date_created").innerHTML = "Publicado em <b>" + new Date(data.date_created).toLocaleDateString("pt-BR") + "</b>";
    document.getElementById("last_updated").innerHTML = "Última atualização <b>"  + new Date(data.last_updated).toLocaleDateString("pt-BR") + "</b>";
    

    if(data.condition=="new"){
      document.getElementById("condition").innerHTML = "<b>Produto novo</>";
    }else{
      document.getElementById("condition").innerHTML = "<b>Produto usado</>";
    };


    let txt_health = "";
    if(data.health){
      document.getElementById("health").innerHTML = "Saúde do anúncio <b>" + data.health + "</b>";
      document.getElementById("progress").innerHTML = data.health * 100 + "%";
      document.getElementById("progress").style.width = data.health * 100 + "%";       
      
    
      if(data.health<0.4){
        txt_health = "Anúncio ruim";
        document.getElementById("progress").className = "w3-red w3-container w3-center";
      };

      if(data.health>0.4){
        txt_health = "Anúncio com classificação média-ruim";
        document.getElementById("progress").className = "w3-orange w3-container w3-center";
      };

      if(data.health>0.6){
        txt_health = "Anúncio com classificação média";
        document.getElementById("progress").className = "w3-lime w3-container w3-center";
      };

      if(data.health>0.8){
        txt_health = "Anúncio bem avaliado";
        document.getElementById("progress").className = "w3-light-green w3-container w3-center";
      };

      if(data.health>0.95){
        txt_health = "Anúncio muito bem avaliado";
        document.getElementById("progress").className  = "w3-green w3-container w3-center";
      };

      document.getElementById("txt_health").innerHTML = txt_health;
    }else{
      document.getElementById("txt_health").innerHTML = "Não possui dados da saúde do anúncio";
    };
    
    if(data.sold_quantity){
      document.getElementById("sold_quantity").innerHTML = "Quantidade vendidas " + data.sold_quantity;
    };

    if(data.initial_quantity){
      document.getElementById("initial_quantity").innerHTML = "Quantidade inicial <b>" + data.initial_quantity + "</b>";
    };

    if(data.available_quantity){
      document.getElementById("available_quantity").innerHTML = "Quantidade disponível " + data.available_quantity;
    };
            
    let txt_listing_type_id = ""; 
    data.listing_type_id = "free" ? txt_listing_type_id = "Grátis" : txt_listing_type_id = txt_listing_type_id;
    data.listing_type_id = "Free" ? txt_listing_type_id = "Grátis" : txt_listing_type_id = txt_listing_type_id;
    
    data.listing_type_id = "gratuito" ? txt_listing_type_id = "Grátis" : txt_listing_type_id = txt_listing_type_id;
    data.listing_type_id = "Gratuito" ? txt_listing_type_id = "Grátis" : txt_listing_type_id = txt_listing_type_id;
    
    data.listing_type_id = "gold" ? txt_listing_type_id = "Clássico" : txt_listing_type_id = txt_listing_type_id;
    data.listing_type_id = "Gold" ? txt_listing_type_id = "Clássico" : txt_listing_type_id = txt_listing_type_id;
    
    data.listing_type_id = "bronze" ? txt_listing_type_id = "Clássico" : txt_listing_type_id = txt_listing_type_id;
    data.listing_type_id = "Bronze" ? txt_listing_type_id = "Clássico" : txt_listing_type_id = txt_listing_type_id;
    
    data.listing_type_id = "silver" ? txt_listing_type_id = "Clássico" : txt_listing_type_id = txt_listing_type_id;
    data.listing_type_id = "Silver" ? txt_listing_type_id = "Clássico" : txt_listing_type_id = txt_listing_type_id;
    
    data.listing_type_id = "gold_special" ? txt_listing_type_id = "Clássico" : txt_listing_type_id = txt_listing_type_id;
    data.listing_type_id = "Gold_special" ? txt_listing_type_id = "Clássico" : txt_listing_type_id = txt_listing_type_id;
    
    data.listing_type_id = "gold_premium" ? txt_listing_type_id = "Premium" : txt_listing_type_id = txt_listing_type_id;
    data.listing_type_id = "Gold_premium" ? txt_listing_type_id = "Premium" : txt_listing_type_id = txt_listing_type_id;
    
    data.listing_type_id = "gold_pro" ? txt_listing_type_id = "Premium" : txt_listing_type_id = txt_listing_type_id;
    data.listing_type_id = "Gold_pro" ? txt_listing_type_id = "Premium" : txt_listing_type_id = txt_listing_type_id;
    

    document.getElementById("listing_type_id").innerHTML = "<b>" + txt_listing_type_id + "</b>" ;
    document.getElementById("accepts_mercadopago").innerHTML = data.accepts_mercadopago = true ? "<b>Aceita Mercado Pago</b>": "Não aceita Mercado Pago";
    document.getElementById("shipping").innerHTML = data.shipping.free_shipping == true ? "<b>Frete grátis</b>" : "Frete à pagar";
    document.getElementById("logistic_type").innerHTML = data.shipping.logistic_type == "fulfillment" ? "Produto no <b>FULL</b>" : "";
    
    document.getElementById("state").innerHTML = "Estado <b>" + data.seller_address.state.name + "</b>";			
  document.getElementById("city").innerHTML = "Cidade <b>" + data.seller_address.city.name  + "</b>";				

       
    
  })
  .catch(error => {
    //console.error('Error:', error);
  });	
  
  

});