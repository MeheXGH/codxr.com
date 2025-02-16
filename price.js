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
          "₹5,999": "$499",
          "₹10,999": "$799",
          "₹24,999": "$1,499",
          "₹45,999*": "$2,499*",
          "Start from ₹3,999/year": "Start from $99/year",
          "₹1,499/page": "$49/page",
          "₹6,999": "$199",
          "₹4,999": "$299"
        },
        "/website-redesign.html": {
          "₹6,999": "$599",
          "₹14,999": "$999",
          "₹24,999": "$1,499",
          "₹49,999*": "$2,999*",
          "Start from ₹3,999/year": "Start from $99/year",
          "₹1,499/page": "$49/page",
          "₹6,999": "$199",
          "₹4,999": "$299"
        },
        "/seo-services.html": {
          "₹4,999": "$299",
          "₹9,999": "$599",
          "₹19,999": "$1,199",
          "₹39,999*": "$2,499*",
          "₹1,999": "$99",
          "₹1,499": "$79",
          "₹999/link": "$49/link",
          "₹2,999": "$149",
          "₹999/article": "$60/article",
          "₹5,999": "$199"
        },
        "/content-writing.html": {
          "₹3,999": "$149",
          "₹9,999": "$349",
          "₹14,999": "$549",
          "₹29,999*": "$1,299*",
          "₹1,499/article": "$49/article",
          "₹2,499/month": "$99/month",
          "₹4,999": "$199",
          "₹6,999": "$299",
          "₹5,999": "$199",
          "₹4,999": "$199"
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
  