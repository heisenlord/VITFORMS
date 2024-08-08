async function sayhello() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },

    func: () => {
      const person = {
        Email: "nishanthreddy4566@gmail.com",
        Name: "Nishanth",
        "Reg. No": "21BCE7079",
        "Reg Number": "21BCE7079",
        Mobile: "+918125834688",
      };

      let spn = document.getElementsByClassName("M7eMe");
      let inp = "zHQkBf";
      let inpdiv = "ndJi5d";
      let el = document.getElementsByClassName("aDTYNe").innerText;
      let spni = -1;
      console.log(el);
      if (el != "Record") {
        spni = 0;
      }
      console.log(el);
      console.log("spni" + spni);
      let inple = document.getElementsByClassName(inp);
      for (let i = 0; i < inple.length; i++) {
        let st = spn[i + 1 - spni].innerText; // Logs the value of each input element
        for (const key in person) {
          console.log(st + "  " + key);

          if (person.hasOwnProperty(st)) {
            document.getElementsByClassName(inp)[i].value = person[st];
            document.getElementsByClassName(inp)[i].style.backgroundColor =
              "pink";
            document.getElementsByClassName(inpdiv)[i].style.display = "none";
            console.log(person[st]);
            break;
          }
        }
      }

      console.log(spn);

      console.log(document.getElementsByClassName(inp));
      console.log(document.getElementsByClassName(inpdiv));
      alert("Hello from my extension!");
    },
  });
}

document.getElementById("myButton").addEventListener("click", sayhello);
