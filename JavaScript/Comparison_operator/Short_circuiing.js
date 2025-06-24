    // 1. Default Value Setup 
    const userSelectedTheme = null;
    const theme = userSelectedTheme || "light";
    console.log("Theme:", theme);  // Output: light

    // 2. Optional Callback 
    function onSubmit(data, callback) {
      callback && callback(data);
    }

    onSubmit("Form Data", function(data) {
      console.log("Callback received:", data);  // Only prints if callback exists
    });

    onSubmit("Form Data");  // No error even if callback is missing

    //3. Lazy DOM Initialization 
    const el = document.getElementById("userCard") || createCard();

    function createCard() {
      const div = document.createElement("div");
      div.id = "userCard";
      div.textContent = "User Card Created!";
      document.body.appendChild(div);
      return div;
    }

    console.log("DOM element:", el);

    //4. Form Field Defaulting 
    const input = { value: "" };  // Simulate an empty form field
    const age = Number(input.value) || 18;
    console.log("Age:", age);  // Output: 18

    // 5. Permission Checks 
    const user = null;
    const isAdmin = user && user.role === "admin";
    console.log("Is Admin:", isAdmin);  // Output: null (safe, no crash)

    // 6. Feature Toggle 
    const env = { ANALYTICS_ENABLED: undefined };
    const analyticsEnabled = env.ANALYTICS_ENABLED || false;
    console.log("Analytics Enabled:", analyticsEnabled);  // Output: false

    // 7. Conditional Rendering (Simulated) 
    const isLoggedIn = true;
    isLoggedIn && renderDashboard();

    function renderDashboard() {
      console.log("Dashboard rendered!");  // Runs only if logged in
    }

    // 8. Fallback Chain 
    const config = null || undefined || "" || "Default Config";
    console.log("Config:", config);  // Output: Default Config

    //9. Truthy / Falsy Test 
    console.log("Falsy result:", false || 0 || "" || NaN);  // NaN
    console.log("Truthy result:", "JS" || 0 || null);       // JS

    // 10. Safe Property 
    const product = undefined;
    // console.log(product.name); // ❌ This would throw
    const safeName = product && product.name;
    console.log("Safe access:", safeName);