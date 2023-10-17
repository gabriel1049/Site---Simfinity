    // Obtém elementos do DOM
    const continentSelect = document.getElementById("continent");
    const brandSelect = document.getElementById("brand");
    const searchButton = document.getElementById("searchButton");

    // URL base
    const baseUrl = "https://mystore.mysimtravel.com/";

    // Define o redirecionamento com base nas seleções
    searchButton.addEventListener("click", function() {
      const selectedContinent = continentSelect.value;
      const selectedBrand = brandSelect.value;

      if (selectedContinent === "europa" && selectedBrand === "apple") {
        // Redireciona para a URL específica
        window.location.href = baseUrl + "Especial5GB";
      } else {
        alert("Opções selecionadas não correspondem a um destino válido.");
      }
    });



    /* const urlMappings = {
      africa: {
        apple: "https://example.com/africa-apple",
        samsung: "https://example.com/africa-samsung",
        huawei: "https://example.com/africa-huawei",
        xiaomi: "https://example.com/africa-xiaomi",
      },
      america: {
        // Mapeie as seleções para URLs correspondentes na América
      },
      asia: {
        // Mapeie as seleções para URLs correspondentes na Ásia
      },
      europa: {
        // Mapeie as seleções para URLs correspondentes na Europa
      },
      oceania: {
        // Mapeie as seleções para URLs correspondentes na Oceania
      }
    };

    // Obtém elementos do DOM
    const continentSelect = document.getElementById("continent");
    const brandSelect = document.getElementById("brand");
    const searchButton = document.getElementById("searchButton");

    // Define o redirecionamento com base nas seleções
    searchButton.addEventListener("click", function() {
      const selectedContinent = continentSelect.value;
      const selectedBrand = brandSelect.value;

      if (urlMappings[selectedContinent] && urlMappings[selectedContinent][selectedBrand]) {
        // Redireciona para a URL correspondente
        window.location.href = urlMappings[selectedContinent][selectedBrand];
      } else {
        alert("Opções selecionadas não correspondem a um destino válido.");
      }
    }); */