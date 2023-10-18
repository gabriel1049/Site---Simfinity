
    const urlMappings = {
      africa: {
        apple: "https://example.com/africa-apple",
        samsung: "https://example.com/africa-samsung",
        huawei: "https://example.com/africa-huawei",
        xiaomi: "https://example.com/africa-xiaomi",
        motorola: "https://example.com/oceania-motorola",
        google: "https://example.com/oceania-google",
      },
      america: {
        apple: "https://example.com/america-apple",
        samsung: "https://example.com/america-samsung",
        huawei: "https://example.com/america-huawei",
        xiaomi: "https://example.com/america-xiaomi",
        motorola: "https://example.com/oceania-motorola",
        google: "https://example.com/oceania-google",
      },
      asia: {
        apple: "https://example.com/asia-apple",
        samsung: "https://example.com/asia-samsung",
        huawei: "https://example.com/asia-huawei",
        xiaomi: "https://example.com/asia-xiaomi",
        motorola: "https://example.com/oceania-motorola",
        google: "https://example.com/oceania-google",
      },
      europa: {
        apple: "https://example.com/europa-apple",
        samsung: "https://example.com/europa-samsung",
        huawei: "https://example.com/europa-huawei",
        xiaomi: "https://example.com/europa-xiaomi",
        motorola: "https://example.com/oceania-motorola",
        google: "https://example.com/oceania-google",
      },
      oceania: {
        apple: "https://example.com/oceania-apple",
        samsung: "https://example.com/oceania-samsung",
        huawei: "https://example.com/oceania-huawei",
        xiaomi: "https://example.com/oceania-xiaomi",
        motorola: "https://example.com/oceania-motorola",
        google: "https://example.com/oceania-google",
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
    });