async function detectCountryAndSetPrices() {
    try {
      let response = await fetch("https://ipapi.co/json/");
      let data = await response.json();
      let country = data.country;
  
      // Identify the page based on URL
      let page = window.location.pathname;
      
      // Define INR to USD price mapping for each page
      let priceMappings = {
        "/website-devlopment.html": {
          "₹5,999": "$72",
          "₹10,999": "$132",
          "₹24,999": "$299",
          "₹45,999*": "$550*",
          "Start from ₹3,999/year": "Start from $48/year",
          "₹1,499/page": "$18/page",
          "₹5,999": "$72",
          "₹4,999": "$60"
        },
        "/website-redesign.html": {
          "₹6,999": "$84",
          "₹14,999": "$180",
          "₹24,999": "$299",
          "₹49,999*": "$599*",
          "Start from ₹3,999/year": "Start from $48/year",
          "₹1,499/page": "$18/page",
          "₹5,999": "$72",
          "₹4,999": "$60"
        },
        "/seo-services.html": {
          "₹4,999": "$60",
          "₹9,999": "$120",
          "₹19,999": "$240",
          "₹39,999*": "$480*",
          "₹1,999": "$48",
          "₹1,499": "$18",
          "₹999/link": "$60/link",
          "₹2,999": "$72",
          "₹999/article": "$60/article",
          "₹5,999": "$72"
        },
        "/content-writing.html": {
          "₹3,999": "$48",
          "₹9,999": "$120",
          "₹14,999": "$180",
          "₹29,999*": "$360*",
          "₹1,499/article": "$48/article",
          "₹2,499/month": "$18/month",
          "₹4,999": "$48",
          "₹6,499": "$18",
          "₹5,999": "$72",
          "₹4,999": "$60"
        }
      };
  
      // Get price mapping based on current page
      let priceMapping = priceMappings[page] || {};
  
      // Update all price elements
      document.querySelectorAll(".price, .addon p").forEach(element => {
        let inrPrice = element.innerText;
        if (country !== "IN" && priceMapping[inrPrice]) {
          element.innerText = priceMapping[inrPrice];
        }
      });
  
    } catch (error) {
      console.error("Error fetching country data", error);
    }
  }
  
  // Run the function on page load
  detectCountryAndSetPrices();
  