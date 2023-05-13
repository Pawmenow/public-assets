// Nice Select
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.NiceSelect=t():e.NiceSelect=t()}(self,(()=>(()=>{"use strict";var e={d:(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function i(e){var t=document.createEvent("MouseEvents");t.initEvent("click",!0,!1),e.dispatchEvent(t)}function s(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!0,!1),e.dispatchEvent(t)}function o(e){var t=document.createEvent("FocusEvent");t.initEvent("focusin",!0,!1),e.dispatchEvent(t)}function n(e){var t=document.createEvent("FocusEvent");t.initEvent("focusout",!0,!1),e.dispatchEvent(t)}function d(e){var t=document.createEvent("UIEvent");t.initEvent("modalclose",!0,!1),e.dispatchEvent(t)}function l(e,t){"invalid"==t?(c(this.dropdown,"invalid"),h(this.dropdown,"valid")):(c(this.dropdown,"valid"),h(this.dropdown,"invalid"))}function r(e,t){return null!=e[t]?e[t]:e.getAttribute(t)}function a(e,t){return!!e&&e.classList.contains(t)}function c(e,t){if(e)return e.classList.add(t)}function h(e,t){if(e)return e.classList.remove(t)}e.r(t),e.d(t,{bind:()=>f,default:()=>u});var p={data:null,searchable:!1,showSelectedItems:!1};function u(e,t){this.el=e,this.config=Object.assign({},p,t||{}),this.data=this.config.data,this.selectedOptions=[],this.placeholder=r(this.el,"placeholder")||this.config.placeholder||"Select an option",this.searchtext=r(this.el,"searchtext")||this.config.searchtext||"Search",this.selectedtext=r(this.el,"selectedtext")||this.config.selectedtext||"selected",this.dropdown=null,this.multiple=r(this.el,"multiple"),this.disabled=r(this.el,"disabled"),this.create()}function f(e,t){return new u(e,t)}return u.prototype.create=function(){this.el.style.opacity="0",this.el.style.width="0",this.el.style.padding="0",this.el.style.height="0",this.data?this.processData(this.data):this.extractData(),this.renderDropdown(),this.bindEvent()},u.prototype.processData=function(e){var t=[];e.forEach((e=>{t.push({data:e,attributes:{selected:!!e.selected,disabled:!!e.disabled,optgroup:"optgroup"==e.value}})})),this.options=t},u.prototype.extractData=function(){var e=this.el.querySelectorAll("option,optgroup"),t=[],i=[],s=[];e.forEach((e=>{if("OPTGROUP"==e.tagName)var s={text:e.label,value:"optgroup"};else s={text:e.innerText,value:e.value,selected:null!=e.getAttribute("selected"),disabled:null!=e.getAttribute("disabled")};var o={selected:e.getAttribute("selected"),disabled:e.disabled,optgroup:"OPTGROUP"==e.tagName};t.push(s),i.push({data:s,attributes:o})})),this.data=t,this.options=i,this.options.forEach((e=>{e.attributes.selected&&s.push(e)})),this.selectedOptions=s},u.prototype.renderDropdown=function(){var e=["nice-select",r(this.el,"class")||"",this.disabled?"disabled":"",this.multiple?"has-multiple":""];let t='<div class="nice-select-search-box">';t+=`<input type="text" class="nice-select-search" placeholder="${this.searchtext}..." title="search"/>`,t+="</div>";var i=`<div class="${e.join(" ")}" tabindex="${this.disabled?null:0}">`;i+=`<span class="${this.multiple?"multiple-options":"current"}"></span>`,i+='<div class="nice-select-dropdown">',i+=`${this.config.searchable?t:""}`,i+='<ul class="list"></ul>',i+="</div>",i+="</div>",this.el.insertAdjacentHTML("afterend",i),this.dropdown=this.el.nextElementSibling,this._renderSelectedItems(),this._renderItems()},u.prototype._renderSelectedItems=function(){if(this.multiple){var e="";this.config.showSelectedItems||this.config.showSelectedItems||"auto"==window.getComputedStyle(this.dropdown).width||this.selectedOptions.length<2?(this.selectedOptions.forEach((function(t){e+=`<span class="current">${t.data.text}</span>`})),e=""==e?this.placeholder:e):e=this.selectedOptions.length+" "+this.selectedtext,this.dropdown.querySelector(".multiple-options").innerHTML=e}else{var t=this.selectedOptions.length>0?this.selectedOptions[0].data.text:this.placeholder;this.dropdown.querySelector(".current").innerHTML=t}},u.prototype._renderItems=function(){var e=this.dropdown.querySelector("ul");this.options.forEach((t=>{e.appendChild(this._renderItem(t))}))},u.prototype._renderItem=function(e){var t=document.createElement("li");if(t.innerHTML=e.data.text,e.attributes.optgroup)c(t,"optgroup");else{t.setAttribute("data-value",e.data.value);var i=["option",e.attributes.selected?"selected":null,e.attributes.disabled?"disabled":null];t.addEventListener("click",this._onItemClicked.bind(this,e)),t.classList.add(...i)}return e.element=t,t},u.prototype.update=function(){if(this.extractData(),this.dropdown){var e=a(this.dropdown,"open");this.dropdown.parentNode.removeChild(this.dropdown),this.create(),e&&i(this.dropdown)}r(this.el,"disabled")?this.disable():this.enable()},u.prototype.disable=function(){this.disabled||(this.disabled=!0,c(this.dropdown,"disabled"))},u.prototype.enable=function(){this.disabled&&(this.disabled=!1,h(this.dropdown,"disabled"))},u.prototype.clear=function(){this.resetSelectValue(),this.selectedOptions=[],this._renderSelectedItems(),this.update(),s(this.el)},u.prototype.destroy=function(){this.dropdown&&(this.dropdown.parentNode.removeChild(this.dropdown),this.el.style.display="")},u.prototype.bindEvent=function(){this.dropdown.addEventListener("click",this._onClicked.bind(this)),this.dropdown.addEventListener("keydown",this._onKeyPressed.bind(this)),this.dropdown.addEventListener("focusin",o.bind(this,this.el)),this.dropdown.addEventListener("focusout",n.bind(this,this.el)),this.el.addEventListener("invalid",l.bind(this,this.el,"invalid")),window.addEventListener("click",this._onClickedOutside.bind(this)),this.config.searchable&&this._bindSearchEvent()},u.prototype._bindSearchEvent=function(){var e=this.dropdown.querySelector(".nice-select-search");e&&e.addEventListener("click",(function(e){return e.stopPropagation(),!1})),e.addEventListener("input",this._onSearchChanged.bind(this))},u.prototype._onClicked=function(e){var t,i;if(e.preventDefault(),a(this.dropdown,"open")?this.multiple||(h(this.dropdown,"open"),d(this.el)):(c(this.dropdown,"open"),t=this.el,(i=document.createEvent("UIEvent")).initEvent("modalopen",!0,!1),t.dispatchEvent(i)),a(this.dropdown,"open")){var s=this.dropdown.querySelector(".nice-select-search");s&&(s.value="",s.focus());var o=this.dropdown.querySelector(".focus");h(o,"focus"),c(o=this.dropdown.querySelector(".selected"),"focus"),this.dropdown.querySelectorAll("ul li").forEach((function(e){e.style.display=""}))}else this.dropdown.focus()},u.prototype._onItemClicked=function(e,t){var i=t.target;a(i,"disabled")||(this.multiple?a(i,"selected")?(h(i,"selected"),this.selectedOptions.splice(this.selectedOptions.indexOf(e),1),this.el.querySelector(`option[value="${i.dataset.value}"]`).removeAttribute("selected")):(c(i,"selected"),this.selectedOptions.push(e)):(this.selectedOptions.forEach((function(e){h(e.element,"selected")})),c(i,"selected"),this.selectedOptions=[e]),this._renderSelectedItems(),this.updateSelectValue())},u.prototype.updateSelectValue=function(){if(this.multiple){var e=this.el;this.selectedOptions.forEach((function(t){var i=e.querySelector(`option[value="${t.data.value}"]`);i&&i.setAttribute("selected",!0)}))}else this.selectedOptions.length>0&&(this.el.value=this.selectedOptions[0].data.value);s(this.el)},u.prototype.resetSelectValue=function(){if(this.multiple){var e=this.el;this.selectedOptions.forEach((function(t){var i=e.querySelector(`option[value="${t.data.value}"]`);i&&i.removeAttribute("selected")}))}else this.selectedOptions.length>0&&(this.el.selectedIndex=-1);s(this.el)},u.prototype._onClickedOutside=function(e){this.dropdown.contains(e.target)||(h(this.dropdown,"open"),d(this.el))},u.prototype._onKeyPressed=function(e){var t=this.dropdown.querySelector(".focus"),s=a(this.dropdown,"open");if(13==e.keyCode)i(s?t:this.dropdown);else if(40==e.keyCode){if(s){var o=this._findNext(t);o&&(h(this.dropdown.querySelector(".focus"),"focus"),c(o,"focus"))}else i(this.dropdown);e.preventDefault()}else if(38==e.keyCode){if(s){var n=this._findPrev(t);n&&(h(this.dropdown.querySelector(".focus"),"focus"),c(n,"focus"))}else i(this.dropdown);e.preventDefault()}else if(27==e.keyCode&&s)i(this.dropdown);else if(32===e.keyCode&&s)return!1;return!1},u.prototype._findNext=function(e){for(e=e?e.nextElementSibling:this.dropdown.querySelector(".list .option");e;){if(!a(e,"disabled")&&"none"!=e.style.display)return e;e=e.nextElementSibling}return null},u.prototype._findPrev=function(e){for(e=e?e.previousElementSibling:this.dropdown.querySelector(".list .option:last-child");e;){if(!a(e,"disabled")&&"none"!=e.style.display)return e;e=e.previousElementSibling}return null},u.prototype._onSearchChanged=function(e){var t=a(this.dropdown,"open"),i=e.target.value;if(""==(i=i.toLowerCase()))this.options.forEach((function(e){e.element.style.display=""}));else if(t){var s=new RegExp(i);this.options.forEach((function(e){var t=e.data.text.toLowerCase(),i=s.test(t);e.element.style.display=i?"":"none"}))}this.dropdown.querySelectorAll(".focus").forEach((function(e){h(e,"focus")})),c(this._findNext(null),"focus")},t})()));


  var dogBreeds = [
    {
      "name": "Affenpinscher"
    },
    {
      "name": "Afghan Hound"
    },
    {
      "name": "Africanis"
    },
    {
      "name": "Aidi"
    },
    {
      "name": "Airedale Terrier"
    },
    {
      "name": "Akbash"
    },
    {
      "name": "Akita"
    },
    {
      "name": "Aksaray Malaklisi"
    },
    {
      "name": "Alano Español"
    },
    {
      "name": "Alapaha Blue Blood Bulldog"
    },
    {
      "name": "Alaskan husky"
    },
    {
      "name": "Alaskan Klee Kai"
    },
    {
      "name": "Alaskan Malamute"
    },
    {
      "name": "Alopekis"
    },
    {
      "name": "Alpine Dachsbracke"
    },
    {
      "name": "American Bulldog"
    },
    {
      "name": "American Bully"
    },
    {
      "name": "American Cocker Spaniel"
    },
    {
      "name": "American English Coonhound"
    },
    {
      "name": "American Eskimo Dog"
    },
    {
      "name": "American Foxhound"
    },
    {
      "name": "American Hairless Terrier"
    },
    {
      "name": "American Pit Bull Terrier"
    },
    {
      "name": "American Staffordshire Terrier"
    },
    {
      "name": "American Water Spaniel"
    },
    {
      "name": "Andalusian Hound"
    },
    {
      "name": "AngloFrançais de Petite Vénerie"
    },
    {
      "name": "Appenzeller Sennenhund"
    },
    {
      "name": "Ariegeois"
    },
    {
      "name": "Armant"
    },
    {
      "name": "Armenian Gampr dog"
    },
    {
      "name": "Artois Hound"
    },
    {
      "name": "Assyrian Mastiff"
    },
    {
      "name": "Australian Cattle Dog"
    },
    {
      "name": "Australian Kelpie"
    },
    {
      "name": "Australian Shepherd"
    },
    {
      "name": "Australian Stumpy Tail Cattle Dog"
    },
    {
      "name": "Australian Terrier"
    },
    {
      "name": "Austrian Black and Tan Hound"
    },
    {
      "name": "Austrian Pinscher"
    },
    {
      "name": "Azawakh"
    },
    {
      "name": "Bakharwal dog"
    },
    {
      "name": "Banjara Hound"
    },
    {
      "name": "Barbado da Terceira"
    },
    {
      "name": "Barbet"
    },
    {
      "name": "Basenji"
    },
    {
      "name": "Basque Shepherd Dog"
    },
    {
      "name": "Basset Artésien Normand"
    },
    {
      "name": "Basset Bleu de Gascogne"
    },
    {
      "name": "Basset Fauve de Bretagne"
    },
    {
      "name": "Basset Hound"
    },
    {
      "name": "Bavarian Mountain Hound"
    },
    {
      "name": "Beagle"
    },
    {
      "name": "BeagleHarrier"
    },
    {
      "name": "Belgian Shepherd"
    },
    {
      "name": "Bearded Collie"
    },
    {
      "name": "Beauceron"
    },
    {
      "name": "Bedlington Terrier"
    },
    {
      "name": "Bergamasco Shepherd"
    },
    {
      "name": "Berger Picard"
    },
    {
      "name": "Bernese Mountain Dog"
    },
    {
      "name": "Bichon Frisé"
    },
    {
      "name": "Billy"
    },
    {
      "name": "Black and Tan Coonhound"
    },
    {
      "name": "Black Norwegian Elkhound"
    },
    {
      "name": "Black Russian Terrier"
    },
    {
      "name": "Black Mouth Cur"
    },
    {
      "name": "Bloodhound"
    },
    {
      "name": "Blue Lacy"
    },
    {
      "name": "Blue Picardy Spaniel"
    },
    {
      "name": "Bluetick Coonhound"
    },
    {
      "name": "Boerboel"
    },
    {
      "name": "Bohemian Shepherd"
    },
    {
      "name": "Bolognese"
    },
    {
      "name": "Border Collie"
    },
    {
      "name": "Border Terrier"
    },
    {
      "name": "Borzoi"
    },
    {
      "name": "Bosnian Coarsehaired Hound"
    },
    {
      "name": "Boston Terrier"
    },
    {
      "name": "Bouvier des Ardennes"
    },
    {
      "name": "Bouvier des Flandres"
    },
    {
      "name": "Boxer"
    },
    {
      "name": "Boykin Spaniel"
    },
    {
      "name": "Bracco Italiano"
    },
    {
      "name": "Braque d'Auvergne"
    },
    {
      "name": "Braque de l'Ariège"
    },
    {
      "name": "Braque du Bourbonnais"
    },
    {
      "name": "Braque Francais"
    },
    {
      "name": "Braque SaintGermain"
    },
    {
      "name": "Briard"
    },
    {
      "name": "Briquet Griffon Vendéen"
    },
    {
      "name": "Brittany"
    },
    {
      "name": "Broholmer"
    },
    {
      "name": "Bruno Jura Hound"
    },
    {
      "name": "Brussels Griffon"
    },
    {
      "name": "Bucovina Shepherd Dog"
    },
    {
      "name": "Bull Arab"
    },
    {
      "name": "Bull Terrier"
    },
    {
      "name": "Bulldog"
    },
    {
      "name": "Bullmastiff"
    },
    {
      "name": "Bully Kutta"
    },
    {
      "name": "Burgos Pointer"
    },
    {
      "name": "BuryatMongolian Wolfhound"
    },
    {
      "name": "Ca de Bou"
    },
    {
      "name": "Ca Mè Mallorquí"
    },
    {
      "name": "Cairn Terrier"
    },
    {
      "name": "Calupoh"
    },
    {
      "name": "Campeiro Bulldog"
    },
    {
      "name": "Can de Chira"
    },
    {
      "name": "Can de Palleiro"
    },
    {
      "name": "Canaan Dog"
    },
    {
      "name": "Canadian Eskimo Dog"
    },
    {
      "name": "Cane Corso"
    },
    {
      "name": "Cane di Oropa"
    },
    {
      "name": "Cane Paratore"
    },
    {
      "name": "Cantabrian Water Dog"
    },
    {
      "name": "Cão da Serra de Aires"
    },
    {
      "name": "Cão de Castro Laboreiro"
    },
    {
      "name": "Cão de Gado Transmontano"
    },
    {
      "name": "Cão Fila de São Miguel"
    },
    {
      "name": "Cardigan Welsh Corgi"
    },
    {
      "name": "Carea Castellano Manchego"
    },
    {
      "name": "Carea Leonés"
    },
    {
      "name": "Carolina Dog"
    },
    {
      "name": "Carpathian Shepherd Dog"
    },
    {
      "name": "Catahoula Leopard Dog"
    },
    {
      "name": "Catalan Sheepdog"
    },
    {
      "name": "Caucasian Shepherd Dog"
    },
    {
      "name": "Cavalier King Charles Spaniel"
    },
    {
      "name": "Central Asian Shepherd Dog"
    },
    {
      "name": "Cesky Fousek"
    },
    {
      "name": "Cesky Terrier"
    },
    {
      "name": "Chesapeake Bay Retriever"
    },
    {
      "name": "Chien Français Blanc et Noir"
    },
    {
      "name": "Chien Français Blanc et Orange"
    },
    {
      "name": "Chien Français Tricolore"
    },
    {
      "name": "Chihuahua"
    },
    {
      "name": "Chilean Terrier"
    },
    {
      "name": "Chinese Crested Dog"
    },
    {
      "name": "Chinook"
    },
    {
      "name": "Chippiparai"
    },
    {
      "name": "Chongqing dog"
    },
    {
      "name": "Chortai"
    },
    {
      "name": "Chow Chow"
    },
    {
      "name": "Chukotka sled dog"
    },
    {
      "name": "Cimarrón Uruguayo"
    },
    {
      "name": "Cirneco dell'Etna"
    },
    {
      "name": "Clumber Spaniel"
    },
    {
      "name": "Colombian fino hound"
    },
    {
      "name": "Continental bulldog"
    },
    {
      "name": "Coton de Tulear"
    },
    {
      "name": "Cretan Hound"
    },
    {
      "name": "Croatian Sheepdog"
    },
    {
      "name": "CurlyCoated Retriever"
    },
    {
      "name": "Cursinu"
    },
    {
      "name": "Czechoslovakian Wolfdog"
    },
    {
      "name": "Dachshund"
    },
    {
      "name": "Dalmatian"
    },
    {
      "name": "Dandie Dinmont Terrier"
    },
    {
      "name": "Danish Spitz"
    },
    {
      "name": "DanishSwedish Farmdog"
    },
    {
      "name": "Denmark Feist"
    },
    {
      "name": "Dingo "
    },
    {
      "name": "Dobermann"
    },
    {
      "name": "Dogo Argentino"
    },
    {
      "name": "Dogo Guatemalteco"
    },
    {
      "name": "Dogo Sardesco"
    },
    {
      "name": "Dogue Brasileiro"
    },
    {
      "name": "Dogue de Bordeaux"
    },
    {
      "name": "Drentse Patrijshond"
    },
    {
      "name": "Drever"
    },
    {
      "name": "Dunker"
    },
    {
      "name": "Dutch Shepherd"
    },
    {
      "name": "Dutch Smoushond"
    },
    {
      "name": "East Siberian Laika"
    },
    {
      "name": "East European Shepherd"
    },
    {
      "name": "Ecuadorian Hairless Dog"
    },
    {
      "name": "English Cocker Spaniel"
    },
    {
      "name": "English Foxhound"
    },
    {
      "name": "English Mastiff"
    },
    {
      "name": "English Setter"
    },
    {
      "name": "English Shepherd"
    },
    {
      "name": "English Springer Spaniel"
    },
    {
      "name": "English Toy Terrier (Black & Tan)"
    },
    {
      "name": "Entlebucher Mountain Dog"
    },
    {
      "name": "Estonian Hound"
    },
    {
      "name": "Estrela Mountain Dog"
    },
    {
      "name": "Eurasier"
    },
    {
      "name": "Field Spaniel"
    },
    {
      "name": "Fila Brasileiro"
    },
    {
      "name": "Finnish Hound"
    },
    {
      "name": "Finnish Lapphund"
    },
    {
      "name": "Finnish Spitz"
    },
    {
      "name": "FlatCoated Retriever"
    },
    {
      "name": "French Bulldog"
    },
    {
      "name": "French Spaniel"
    },
    {
      "name": "Galgo Español"
    },
    {
      "name": "Garafian Shepherd"
    },
    {
      "name": "Gascon Saintongeois"
    },
    {
      "name": "Georgian Shepherd"
    },
    {
      "name": "German Hound"
    },
    {
      "name": "German Longhaired Pointer"
    },
    {
      "name": "German Pinscher"
    },
    {
      "name": "German Roughhaired Pointer"
    },
    {
      "name": "German Shepherd"
    },
    {
      "name": "German Shorthaired Pointer"
    },
    {
      "name": "German Spaniel"
    },
    {
      "name": "German Spitz"
    },
    {
      "name": "German Wirehaired Pointer"
    },
    {
      "name": "Giant Schnauzer"
    },
    {
      "name": "Glen of Imaal Terrier"
    },
    {
      "name": "Golden Retriever"
    },
    {
      "name": "Gończy Polski"
    },
    {
      "name": "Gordon Setter"
    },
    {
      "name": "Grand AngloFrançais Blanc et Noir"
    },
    {
      "name": "Grand AngloFrançais Blanc et Orange"
    },
    {
      "name": "Grand AngloFrançais Tricolore"
    },
    {
      "name": "Grand Basset Griffon Vendéen"
    },
    {
      "name": "Grand Bleu de Gascogne"
    },
    {
      "name": "Grand Griffon Vendéen"
    },
    {
      "name": "Great Dane"
    },
    {
      "name": "Greater Swiss Mountain Dog"
    },
    {
      "name": "Greek Harehound"
    },
    {
      "name": "Greek Shepherd"
    },
    {
      "name": "Greenland Dog"
    },
    {
      "name": "Greyhound"
    },
    {
      "name": "Griffon Bleu de Gascogne"
    },
    {
      "name": "Griffon Fauve de Bretagne"
    },
    {
      "name": "Griffon Nivernais"
    },
    {
      "name": "Gull Dong"
    },
    {
      "name": "Gull Terrier"
    },
    {
      "name": "Hällefors Elkhound"
    },
    {
      "name": "Halden Hound"
    },
    {
      "name": "Hamiltonstövare"
    },
    {
      "name": "Hanover Hound"
    },
    {
      "name": "Harrier"
    },
    {
      "name": "Havanese"
    },
    {
      "name": "Himalayan Sheepdog"
    },
    {
      "name": "Hierran Wolfdog"
    },
    {
      "name": "Hokkaido"
    },
    {
      "name": "Hovawart"
    },
    {
      "name": "Huntaway"
    },
    {
      "name": "Hygen Hound"
    },
    {
      "name": "Ibizan Hound"
    },
    {
      "name": "Icelandic Sheepdog"
    },
    {
      "name": "Indian pariah dog"
    },
    {
      "name": "Indian Spitz"
    },
    {
      "name": "Irish Red and White Setter"
    },
    {
      "name": "Irish Setter"
    },
    {
      "name": "Irish Terrier"
    },
    {
      "name": "Irish Water Spaniel"
    },
    {
      "name": "Irish Wolfhound"
    },
    {
      "name": "Istrian Coarsehaired Hound"
    },
    {
      "name": "Istrian Shorthaired Hound"
    },
    {
      "name": "Italian Greyhound"
    },
    {
      "name": "Jack Russell Terrier"
    },
    {
      "name": "Jagdterrier"
    },
    {
      "name": "Japanese Chin"
    },
    {
      "name": "Japanese Spitz"
    },
    {
      "name": "Japanese Terrier"
    },
    {
      "name": "Jindo"
    },
    {
      "name": "Jonangi"
    },
    {
      "name": "Kai Ken"
    },
    {
      "name": "Kaikadi"
    },
    {
      "name": "Kangal Shepherd Dog"
    },
    {
      "name": "Kanni"
    },
    {
      "name": "Karakachan dog"
    },
    {
      "name": "Karelian Bear Dog"
    },
    {
      "name": "Kars"
    },
    {
      "name": "Karst Shepherd"
    },
    {
      "name": "Keeshond"
    },
    {
      "name": "Kerry Beagle"
    },
    {
      "name": "Kerry Blue Terrier"
    },
    {
      "name": "Khala "
    },
    {
      "name": "King Charles Spaniel"
    },
    {
      "name": "King Shepherd"
    },
    {
      "name": "Kintamani"
    },
    {
      "name": "Kishu"
    },
    {
      "name": "Kokoni"
    },
    {
      "name": "Kombai"
    },
    {
      "name": "Komondor"
    },
    {
      "name": "Kooikerhondje"
    },
    {
      "name": "Koolie"
    },
    {
      "name": "Koyun dog"
    },
    {
      "name": "Kromfohrländer"
    },
    {
      "name": "Kuchi"
    },
    {
      "name": "Kuvasz"
    },
    {
      "name": "Labrador Retriever"
    },
    {
      "name": "Lagotto Romagnolo"
    },
    {
      "name": "Lakeland Terrier"
    },
    {
      "name": "Lancashire Heeler"
    },
    {
      "name": "Landseer"
    },
    {
      "name": "Lapponian Herder"
    },
    {
      "name": "Large Münsterländer"
    },
    {
      "name": "Leonberger"
    },
    {
      "name": "Levriero Sardo"
    },
    {
      "name": "Lhasa Apso"
    },
    {
      "name": "Liangshan Dog"
    },
    {
      "name": "Lithuanian Hound"
    },
    {
      "name": "Lobito Herreño"
    },
    {
      "name": "Löwchen"
    },
    {
      "name": "Lupo Italiano"
    },
    {
      "name": "Mackenzie River husky"
    },
    {
      "name": "Magyar agár"
    },
    {
      "name": "Mahratta Greyhound"
    },
    {
      "name": "Maltese"
    },
    {
      "name": "Manchester Terrier"
    },
    {
      "name": "Maneto",
      "undefined": "            "
    },
    {
      "name": "MaremmanoAbruzzese Sheepdog"
    },
    {
      "name": "McNab dog"
    },
    {
      "name": "Miniature American Shepherd"
    },
    {
      "name": "Miniature Bull Terrier"
    },
    {
      "name": "Miniature Fox Terrier"
    },
    {
      "name": "Miniature Pinscher"
    },
    {
      "name": "Miniature Schnauzer"
    },
    {
      "name": "Molossus of Epirus"
    },
    {
      "name": "Montenegrin Mountain Hound"
    },
    {
      "name": "Mountain Cur"
    },
    {
      "name": "Mountain Feist"
    },
    {
      "name": "Mucuchies"
    },
    {
      "name": "Mudhol Hound"
    },
    {
      "name": "Mudi"
    },
    {
      "name": "Neapolitan Mastiff"
    },
    {
      "name": "Nenets Herding Laika"
    },
    {
      "name": "New Guinea singing dog"
    },
    {
      "name": "New Zealand Heading Dog"
    },
    {
      "name": "Newfoundland"
    },
    {
      "name": "Norfolk Terrier"
    },
    {
      "name": "Norrbottenspets"
    },
    {
      "name": "Northern Inuit Dog"
    },
    {
      "name": "Norwegian Buhund"
    },
    {
      "name": "Norwegian Elkhound"
    },
    {
      "name": "Norwegian Lundehund"
    },
    {
      "name": "Norwich Terrier"
    },
    {
      "name": "Nova Scotia Duck Tolling Retriever"
    },
    {
      "name": "Old Danish Pointer"
    },
    {
      "name": "Old English Sheepdog"
    },
    {
      "name": "Old English Terrier"
    },
    {
      "name": "Olde English Bulldogge"
    },
    {
      "name": "Otterhound"
    },
    {
      "name": "Pachon Navarro"
    },
    {
      "name": "Pampas Deerhound"
    },
    {
      "name": "Papillon"
    },
    {
      "name": "Parson Russell Terrier"
    },
    {
      "name": "Pastore della Lessinia e del Lagorai"
    },
    {
      "name": "Patagonian Sheepdog"
    },
    {
      "name": "Patterdale Terrier"
    },
    {
      "name": "Pekingese"
    },
    {
      "name": "Pembroke Welsh Corgi"
    },
    {
      "name": "Perro Majorero"
    },
    {
      "name": "Perro de Pastor Mallorquin"
    },
    {
      "name": "Perro de Presa Canario"
    },
    {
      "name": "Perro de Presa Mallorquin"
    },
    {
      "name": "Peruvian Inca Orchid"
    },
    {
      "name": "Petit Basset Griffon Vendéen"
    },
    {
      "name": "Petit Bleu de Gascogne"
    },
    {
      "name": "Phalène"
    },
    {
      "name": "Pharaoh Hound"
    },
    {
      "name": "Phu Quoc Ridgeback"
    },
    {
      "name": "Picardy Spaniel"
    },
    {
      "name": "Plummer Terrier"
    },
    {
      "name": "Plott Hound"
    },
    {
      "name": "Podenco Canario"
    },
    {
      "name": "Podenco Valenciano"
    },
    {
      "name": "Pointer"
    },
    {
      "name": "Poitevin"
    },
    {
      "name": "Polish Greyhound"
    },
    {
      "name": "Polish Hound"
    },
    {
      "name": "Polish Lowland Sheepdog"
    },
    {
      "name": "Polish Tatra Sheepdog"
    },
    {
      "name": "Pomeranian"
    },
    {
      "name": "PontAudemer Spaniel"
    },
    {
      "name": "Poodle"
    },
    {
      "name": "Porcelaine"
    },
    {
      "name": "Portuguese Podengo"
    },
    {
      "name": "Portuguese Pointer"
    },
    {
      "name": "Portuguese Water Dog"
    },
    {
      "name": "Posavac Hound"
    },
    {
      "name": "Pražský Krysařík"
    },
    {
      "name": "Pshdar dog"
    },
    {
      "name": "Pudelpointer"
    },
    {
      "name": "Pug"
    },
    {
      "name": "Puli"
    },
    {
      "name": "Pumi"
    },
    {
      "name": "Pungsan dog"
    },
    {
      "name": "Pyrenean Mastiff"
    },
    {
      "name": "Pyrenean Mountain Dog"
    },
    {
      "name": "Pyrenean Sheepdog"
    },
    {
      "name": "Rafeiro do Alentejo"
    },
    {
      "name": "Rajapalayam"
    },
    {
      "name": "Rampur Greyhound"
    },
    {
      "name": "Rat Terrier"
    },
    {
      "name": "Ratonero Bodeguero Andaluz"
    },
    {
      "name": "Ratonero Mallorquin"
    },
    {
      "name": "Ratonero Murciano"
    },
    {
      "name": "Ratonero Valenciano"
    },
    {
      "name": "Redbone Coonhound"
    },
    {
      "name": "Rhodesian Ridgeback"
    },
    {
      "name": "Romanian Mioritic Shepherd Dog"
    },
    {
      "name": "Romanian Raven Shepherd Dog"
    },
    {
      "name": "Rottweiler"
    },
    {
      "name": "Rough Collie"
    },
    {
      "name": "Russian Spaniel"
    },
    {
      "name": "Russian Toy"
    },
    {
      "name": "RussoEuropean Laika"
    },
    {
      "name": "Ryukyu Inu"
    },
    {
      "name": "Saarloos Wolfdog"
    },
    {
      "name": "Sabueso Español"
    },
    {
      "name": "Saint Bernard"
    },
    {
      "name": "Saint Hubert Jura Hound"
    },
    {
      "name": "SaintUsuge Spaniel"
    },
    {
      "name": "Saluki"
    },
    {
      "name": "Samoyed"
    },
    {
      "name": "Sapsali"
    },
    {
      "name": "Sarabi dog"
    },
    {
      "name": "Sardinian Shepherd Dog"
    },
    {
      "name": "Šarplaninac"
    },
    {
      "name": "Schapendoes"
    },
    {
      "name": "Schillerstövare"
    },
    {
      "name": "Schipperke"
    },
    {
      "name": "Schweizer Laufhund"
    },
    {
      "name": "Schweizerischer Niederlaufhund"
    },
    {
      "name": "Scottish Deerhound"
    },
    {
      "name": "Scottish Terrier"
    },
    {
      "name": "Sealyham Terrier"
    },
    {
      "name": "Segugio dell'Appennino"
    },
    {
      "name": "Segugio Italiano"
    },
    {
      "name": "Segugio Maremmano"
    },
    {
      "name": "Serbian Hound"
    },
    {
      "name": "Serbian Tricolour Hound"
    },
    {
      "name": "Serrano Bulldog"
    },
    {
      "name": "Shar Pei"
    },
    {
      "name": "Shetland Sheepdog"
    },
    {
      "name": "Shiba Inu"
    },
    {
      "name": "Shih Tzu"
    },
    {
      "name": "Shikoku"
    },
    {
      "name": "Shiloh Shepherd"
    },
    {
      "name": "Siberian Husky"
    },
    {
      "name": "Silken Windhound"
    },
    {
      "name": "Silky Terrier"
    },
    {
      "name": "Sinhala Hound"
    },
    {
      "name": "Skye Terrier"
    },
    {
      "name": "Sloughi"
    },
    {
      "name": "Slovakian Wirehaired Pointer"
    },
    {
      "name": "Slovenský Cuvac"
    },
    {
      "name": "Slovenský Kopov"
    },
    {
      "name": "Smalandstövare"
    },
    {
      "name": "Small Greek domestic dog"
    },
    {
      "name": "Small Münsterländer"
    },
    {
      "name": "Smooth Collie"
    },
    {
      "name": "Smooth Fox Terrier"
    },
    {
      "name": "SoftCoated Wheaten Terrier"
    },
    {
      "name": "South Russian Ovcharka"
    },
    {
      "name": "Spanish Mastiff"
    },
    {
      "name": "Spanish Water Dog"
    },
    {
      "name": "Spinone Italiano"
    },
    {
      "name": "Sporting Lucas Terrier"
    },
    {
      "name": "Stabyhoun"
    },
    {
      "name": "Staffordshire Bull Terrier"
    },
    {
      "name": "Standard Schnauzer"
    },
    {
      "name": "Stephens Stock"
    },
    {
      "name": "Styrian Coarsehaired Hound"
    },
    {
      "name": "Sussex Spaniel"
    },
    {
      "name": "Swedish Elkhound"
    },
    {
      "name": "Swedish Lapphund"
    },
    {
      "name": "Swedish Vallhund"
    },
    {
      "name": "Swedish White Elkhound"
    },
    {
      "name": "Taigan"
    },
    {
      "name": "Taiwan Dog"
    },
    {
      "name": "Tamaskan Dog"
    },
    {
      "name": "Tang Dog"
    },
    {
      "name": "Tazy"
    },
    {
      "name": "Teddy Roosevelt Terrier"
    },
    {
      "name": "Telomian"
    },
    {
      "name": "Tenterfield Terrier"
    },
    {
      "name": "Terrier Brasileiro"
    },
    {
      "name": "Thai Bangkaew Dog"
    },
    {
      "name": "Thai Ridgeback"
    },
    {
      "name": "Tibetan Kyi Apso"
    },
    {
      "name": "Tibetan Mastiff"
    },
    {
      "name": "Tibetan Spaniel"
    },
    {
      "name": "Tibetan Terrier"
    },
    {
      "name": "Tonya Finosu"
    },
    {
      "name": "Torkuz"
    },
    {
      "name": "Tornjak"
    },
    {
      "name": "Tosa Inu"
    },
    {
      "name": "Toy Fox Terrier"
    },
    {
      "name": "Toy Manchester Terrier"
    },
    {
      "name": "Transylvanian Hound"
    },
    {
      "name": "Treeing Cur"
    },
    {
      "name": "Treeing Feist"
    },
    {
      "name": "Treeing Tennessee Brindle"
    },
    {
      "name": "Treeing Walker Coonhound"
    },
    {
      "name": "Trigg Hound"
    },
    {
      "name": "Tyrolean Hound"
    },
    {
      "name": "Vikhan"
    },
    {
      "name": "Villano de Las Encartaciones"
    },
    {
      "name": "Villanuco de Las Encartaciones"
    },
    {
      "name": "Vizsla"
    },
    {
      "name": "Volpino Italiano"
    },
    {
      "name": "Weimaraner"
    },
    {
      "name": "Welsh Sheepdog"
    },
    {
      "name": "Welsh Springer Spaniel"
    },
    {
      "name": "Welsh Terrier"
    },
    {
      "name": "West Country Harrier"
    },
    {
      "name": "West Highland White Terrier"
    },
    {
      "name": "West Siberian Laika"
    },
    {
      "name": "Westphalian Dachsbracke"
    },
    {
      "name": "Wetterhoun"
    },
    {
      "name": "Whippet"
    },
    {
      "name": "White Shepherd"
    },
    {
      "name": "White Swiss Shepherd Dog"
    },
    {
      "name": "Wire Fox Terrier"
    },
    {
      "name": "Wirehaired Pointing Griffon"
    },
    {
      "name": "Wirehaired Vizsla"
    },
    {
      "name": "Xiasi Dog"
    },
    {
      "name": "Xoloitzcuintle"
    },
    {
      "name": "Yakutian Laika"
    },
    {
      "name": "Yorkshire Terrier"
    },
    {
      "name": "Zerdava"
    },
    {
      "name": "Afador  (Afghan Hound x Labrador Retriever mix)"
    },
    {
      "name": "Afaird  (Afghan Hound x Briard mix)"
    },
    {
      "name": "Affen Spaniel  (Affenpinscher x Cocker Spaniel mix)"
    },
    {
      "name": "Affen Border Terrier  (Affenpinscher x Border Terrier mix)"
    },
    {
      "name": "Affen Tzu  (Affenpinscher x Shih Tzu mix)"
    },
    {
      "name": "Affenchon  (Affenpinscher x Bichon Frise mix)"
    },
    {
      "name": "Affengriffon  (Affenpinscher x Brussels Griffon mix)"
    },
    {
      "name": "Affenhuahua  (Affenpinscher x Chihuahua mix)"
    },
    {
      "name": "Affenpoo  (Affenpinscher x Poodle mix)"
    },
    {
      "name": "Affenpug  (Affenpinscher x Pug mix)"
    },
    {
      "name": "Affenshire  (Affenpinscher x Yorkshire Terrier mix)"
    },
    {
      "name": "Affenwich  (Affenpinscher x Norwich Terrier mix)"
    },
    {
      "name": "Afghan Bay Retriever  (Afghan x Chesapeake Bay Retriever mix)"
    },
    {
      "name": "Afghan Chon  (Afghan Hound x Bichon Frise mix)"
    },
    {
      "name": "Afghan Collie  (Afghan Hound x Border Collie mix)"
    },
    {
      "name": "Afghan Retriever  (Afghan Hound x Golden Retriever mix)"
    },
    {
      "name": "Afghan Sheepdog  (Afghan Hound x Belgian Shepherd mix)"
    },
    {
      "name": "Afghan Spaniel  (Afghan Hound x Cocker Spaniel mix)"
    },
    {
      "name": "Afollie  (Afghan Hound x Collie mix)"
    },
    {
      "name": "AfricanAmerican Bull Boerboel  (Boerboel x American Bulldog mix)"
    },
    {
      "name": "Airedale Shepherd  (Airedale Terrier x German Shepherd mix)"
    },
    {
      "name": "Airedoodle  (Airedale Terrier x Poodle mix)"
    },
    {
      "name": "Akbash Pyrenees  (Akbash Dog x Great Pyrenees mix)"
    },
    {
      "name": "Akbash Rottie  (Akbash Dog x Rottweiler mix)"
    },
    {
      "name": "AkiPoo  (Akita x Poodle mix)"
    },
    {
      "name": "Akita Basset  (Akita x Basset Hound mix)"
    },
    {
      "name": "Akita Bernard  (Akita x Saint Bernard mix)"
    },
    {
      "name": "Akita Chow  (Akita x Chow Chow mix)"
    },
    {
      "name": "Akita Pit  (Akita x Pit Bull Terrier mix)"
    },
    {
      "name": "Akita Shepherd  (Akita x German Shepherd mix)"
    },
    {
      "name": "Akitamatian  (Akita x Dalmatian mix)"
    },
    {
      "name": "Alaskan Goldenmute  (Alaskan Malamute x Golden Retriever mix)"
    },
    {
      "name": "Alaskan Husky Shepherd  (Alaskan Husky x German Shepherd mix)"
    },
    {
      "name": "Alaskan Irish Setsky  (Alaskan Husky x Irish Setter mix)"
    },
    {
      "name": "Alaskan Malador  (Alaskan Malamute x Labrador Retriever mix)"
    },
    {
      "name": "Alaskan Pit Bull  (Alaskan Malamute x Pit Bull Terrier mix)"
    },
    {
      "name": "Alaskan Shepherd  (Alaskan Malamute x German Shepherd Dog mix)"
    },
    {
      "name": "Alaskan Weimsky  (Weimaraner x Alaskan Husky mix)"
    },
    {
      "name": "Alusky  (Alaskan Malamute x Siberian Husky mix)"
    },
    {
      "name": "American Bandogge  (American Bulldog x Mastiff mix)"
    },
    {
      "name": "American Boston Bull Terrier  (American Pit Bull Terrier x Boston Terrier mix)"
    },
    {
      "name": "American Boxer Foxhound  (American Foxhound x Boxer mix)"
    },
    {
      "name": "American BullAussie  (American Bulldog x Australian Shepherd mix)"
    },
    {
      "name": "American Bull Dogue De Bordeaux  (American Bulldog x Dogue De Bordeaux mix)"
    },
    {
      "name": "American BullJack  (American Bulldog x Jack Russell mix)"
    },
    {
      "name": "American Bull Pei  (American Bulldog x Shar Pei mix)"
    },
    {
      "name": "American Bull Staffy  (American Bulldog x American Staffordshire Terrier mix)"
    },
    {
      "name": "American Bullador  (Labrador Retriever x American Bulldog mix)"
    },
    {
      "name": "American Bulldog Shepherd  (American Bulldog x German Shepherd Dog mix)"
    },
    {
      "name": "American Bullhuahua  American Bulldog x Chihuahua mix)"
    },
    {
      "name": "American Bullweiler  (American Bulldog x Rottweiler mix)"
    },
    {
      "name": "American Bull Dane  (American Bulldog x Great Dane mix)"
    },
    {
      "name": "American Bully Staffy Bull Terrier  (American Bulldog x Staffordshire Bull Terrier mix)"
    },
    {
      "name": "American Chow Bulldog  (American Bulldog x Chow Chow mix)"
    },
    {
      "name": "American Eagle Dog  (American Eskimo x Beagle mix)"
    },
    {
      "name": "American Foxeagle  (American Foxhound x Beagle mix)"
    },
    {
      "name": "American Foxy Dane  (American Foxhound x Great Dane mix)"
    },
    {
      "name": "American French Bull Terrier  (American Pit Bull Terrier x French Bulldog mix)"
    },
    {
      "name": "American French Bulldog  (American Bulldog x French Bulldog mix)"
    },
    {
      "name": "American Gointer  (English Pointer x Golden Retriever mix)"
    },
    {
      "name": "American Hairless Min Pin  (American Hairless Terrier x Miniature Pinscher mix)"
    },
    {
      "name": "American Lab Foxhound  (American Foxhound x Labrador Retriever mix)"
    },
    {
      "name": "American MastiBull  (American Bulldog x Mastiff mix)"
    },
    {
      "name": "American Neo Bull  (American Bulldog x Neapolitan Mastiff mix)"
    },
    {
      "name": "American Pit Corso  (American Pit Bull Terrier x Cane Corso mix)"
    },
    {
      "name": "American Pugabull  (American Bulldog x Pug mix)"
    },
    {
      "name": "American Rat Pinscher  (American Rat Terrier x Miniature Pinscher mix)"
    },
    {
      "name": "American Staffy Bullmastiff  (American Staffordshire Terrier x Bullmastiff mix)"
    },
    {
      "name": "Amstiff  (American Stafforshire Terrier x Mastiff mix)"
    },
    {
      "name": "Anatolian Pyrenees  (Anatolian Shepherd x Great Pyrenees mix)"
    },
    {
      "name": "Ausahoula  (Australian Shepherd x Louisiana Catahoula Leopard Dog mix)"
    },
    {
      "name": "Ausky  (Australian Cattle Dog x Siberian Husky mix)"
    },
    {
      "name": "AussTzu  (Miniature Australian Shepherd x Shih Tzu mix)"
    },
    {
      "name": "Aussalier  (Australian Shepherd x Cavalier King Charles Spaniel mix)"
    },
    {
      "name": "Aussie Brittany  (Australian Shepherd x Brittany mix)"
    },
    {
      "name": "AussieChi  (Australian Shepherd x Chihuahua mix)"
    },
    {
      "name": "Aussie Collie  (Australian Shepherd x Collie mix)"
    },
    {
      "name": "AussieCorgi  (Australian Shepherd or Miniature Australian Shepherd x Pembroke Welch Corgi mix)"
    },
    {
      "name": "AussieFlat  (Australian Shepherd x FlatCoated Retriever mix)"
    },
    {
      "name": "Aussie Jack  (Australian Shepherd x Jack Russell Terrier mix)"
    },
    {
      "name": "Aussie Malamute  (Australian Shepherd x Alaskan Malamute mix)"
    },
    {
      "name": "Aussie Newfie  (Australian Shepherd x Newfoundland mix)"
    },
    {
      "name": "Aussie Pom  (Australian Shepherd or Mini or Toy Australian Shepherd x Pomeranian mix)"
    },
    {
      "name": "Aussie Rottie  (Australian Shepherd x Rottweiler mix)"
    },
    {
      "name": "Aussie Shiba  (Australian Shepherd x Shiba Inu mix)"
    },
    {
      "name": "Aussie Siberian  (Australian Shepherd x Siberian Husky mix)"
    },
    {
      "name": "Aussie Silk Terrier  (Australian Terrier x Silky Terrier mix)"
    },
    {
      "name": "Aussie Springer  (Australian Shepherd x the English Springer Spaniel mix)"
    },
    {
      "name": "Aussie Wheaten  (Australian Shepherd x Soft Coated Wheaten Terrier mix)"
    },
    {
      "name": "Aussietare  (Australian Shepherd x Bull Terrier mix)"
    },
    {
      "name": "Aussiedoodle  (Australian Shepherd x Poodle mix)"
    },
    {
      "name": "Aussiedor  (Labrador x Australian Shepherd mix)"
    },
    {
      "name": "Aussimo  (Australian Cattle Dog x American Eskimo Dog mix)"
    },
    {
      "name": "AustiPap  (Australian Shepherd (Standard, Toy or Miniature) x Papillon mix)"
    },
    {
      "name": "Australian Boxherd  (Australian Shepherd x Boxer mix)"
    },
    {
      "name": "Australian Eskimo  (American Eskimo x Australian Shepherd mix)"
    },
    {
      "name": "Australian Retriever  (Australian Shepherd x Golden Retriever mix)"
    },
    {
      "name": "AustiPap  (Miniature Australian Shepherd x Papillon mix)"
    },
    {
      "name": "Australian Yorkshire Terrier  (Australian Terrier x Yorkshire Terrier mix)"
    },
    {
      "name": "Azawakh Borzoi  (Azawakh Hound x Borzoi mix)"
    },
    {
      "name": "BaShar  (Basset Hound x SharPei mix)"
    },
    {
      "name": "Bagle Hound  (Basset Hound x Beagle mix)"
    },
    {
      "name": "Balonkatese  (Maltese x Russkaya Tsvetnaya Bolonka mix)"
    },
    {
      "name": "Bascottie  (Basset Hound x Scottish Terrier mix)"
    },
    {
      "name": "Baseagle  (Basenji x Beagle mix)"
    },
    {
      "name": "Basenji Pit  (Basenji x American Pit Bull Terrier mix)"
    },
    {
      "name": "Baskimo  (American Eskimo x Basset Hound mix)"
    },
    {
      "name": "Bassador  (Basset Hound x Labrador Retriever mix)"
    },
    {
      "name": "Basschshund  (Basset Hound x Dachshund mix)"
    },
    {
      "name": "Basselier  (Cavalier King Charles Spaniel x Basset Hound mix)"
    },
    {
      "name": "Basset Bluetick  (Basset Hound x Bluetick Coonhound mix)"
    },
    {
      "name": "Basset Bordeaux  (Basset Hound x Dogue de Bordeaux mix)"
    },
    {
      "name": "Basset Foxhound  (Basset Hound x Foxhound mix)"
    },
    {
      "name": "Basset Heeler  (Basset Hound x Blue Heeler mix)"
    },
    {
      "name": "Basset Jack  (Basset Hound x Jack Russell Terrier mix)"
    },
    {
      "name": "Basset Retriever  (Basset Hound x Golden Retriever mix)"
    },
    {
      "name": "Basset Shepherd  (Basset Hound x German Shepherd mix)"
    },
    {
      "name": "Bassetoodle  (Basset Hound x Poodle mix)"
    },
    {
      "name": "Bassky  (Basset Hound x Siberian Husky mix)"
    },
    {
      "name": "Bassmatian  (Basset Hound x Dalmatian mix)"
    },
    {
      "name": "Basston  (Basset Hound x Boston Terrier mix)"
    },
    {
      "name": "Bassugg  (Basset Hound x Pug mix)"
    },
    {
      "name": "BD Terrier  (American Bulldog x Bull Terrier mix)"
    },
    {
      "name": "BeApso  (Beagle x Lhasa Apso mix)"
    },
    {
      "name": "Bea Griffon  (Beagle x Brussels Griffon mix)"
    },
    {
      "name": "BeaTzu  (Beagle x Shih Tzu mix)"
    },
    {
      "name": "Beabull  (Beagle x Bulldog mix)"
    },
    {
      "name": "Beacol  (Beagle x Bearded Collie mix)"
    },
    {
      "name": "Beagi  (Beagle x Pembroke or Cardigan Welsh Corgi mix)"
    },
    {
      "name": "Beagleman  (Beagle x Doberman Pinscher mix)"
    },
    {
      "name": "Beaglemation  (Beagle x Dalmatian mix)"
    },
    {
      "name": "Beagle Chin  (Beagle x Japanese Chin mix)"
    },
    {
      "name": "Beagle Heeler  (Beagle x Australian Cattle Dog mix)"
    },
    {
      "name": "Beagle Pit  (Beagle x Pit Bull mix)"
    },
    {
      "name": "Beagle Point  (Beagle x Pointer mix)"
    },
    {
      "name": "Beagle Sheltie  (Beagle x Shetland Sheepdog mix)"
    },
    {
      "name": "Beagle Shepherd  (Beagle x German Shepherd mix)"
    },
    {
      "name": "Beaglier  (Beagle x Cavalier King Charles mix)"
    },
    {
      "name": "Beaglolo  (Beagle x Bolognese mix)"
    },
    {
      "name": "Beago  (Beagle x Golden Retriever mix)"
    },
    {
      "name": "Beardoodle  (Bearded Collie x Poodle mix)"
    },
    {
      "name": "Beaski  (Beagle x Siberian Husky mix)"
    },
    {
      "name": "Beauceroodle  (Beauceron x Poodle mix)"
    },
    {
      "name": "Bebasset Bordeaux  (Beagle x Basset Hound x Dogue de Bordeaux mix)"
    },
    {
      "name": "Bedlington Whippet  (Bedlington Terrier x Whippet mix)"
    },
    {
      "name": "Belgian Shepadoodle  (Belgian Shepherd x Poodle mix)"
    },
    {
      "name": "Belusky  (Belgian Malinois x Siberian Husky mix)"
    },
    {
      "name": "Bernedoodle  (Bernese Mountain Dog x Poodle mix)"
    },
    {
      "name": "Bernefie  (Bernese Mountain Dog x Newfoundland mix (pronounced burnahfee)"
    },
    {
      "name": "Berner Chow  (Bernese Mountain Dog x Chow Chow mix)"
    },
    {
      "name": "Berner Dane  (Great Dane x Bernese Mountain Dog mix)"
    },
    {
      "name": "Bernese Cattle Dog  (Bernese Mountain Dog x Australian Cattle Dog mix)"
    },
    {
      "name": "Bernese Rottie  (Bernese Mountain Dog x Rottweiler mix)"
    },
    {
      "name": "Bichpoo  (Bichon Frise x Poodle mix)"
    },
    {
      "name": "Bichomo  (American Eskimo x Bichon Frise mix)"
    },
    {
      "name": "BichonARanian  (Bichon Frise x Pomeranian mix)"
    },
    {
      "name": "Bichon Yorkie  (Bichon Frise x Yorkshire Terrier mix)"
    },
    {
      "name": "Biton  (Bichon Frise x Coton de Tulear mix)"
    },
    {
      "name": "Black and Tan Coonoodle  (Poodle x Black and Tan Coonhound mix)"
    },
    {
      "name": "Black and Tan Coonshepherd  (Black and Tan Coonhound x German Shepherd mix)"
    },
    {
      "name": "Black and Tan Labhound  (Black and Tan Coonhound x Labrador Retriever mix)"
    },
    {
      "name": "Black Mouth Pom Cur  (Black Mouth Cur x Pomeranian mix)"
    },
    {
      "name": "Black Russian Wolfhound Terrier (Black Russian Terrier x Irish Wolfhound mix)"
    },
    {
      "name": "Bloodahouli  (Bloodhound x Catahoula mix)"
    },
    {
      "name": "Blue Blood Cane Corso  (Alapaha Blue Blood Bulldog x Cane Corso mix)"
    },
    {
      "name": "Blue Spaniel  (Australian Cattle Dog x Cocker Spaniel mix)"
    },
    {
      "name": "BlueTzu Heeler  (Australian Cattle Dog x Shih Tzu mix)"
    },
    {
      "name": "Bluetick Coonoodle  (Bluetick Coonhound x Poodle mix)"
    },
    {
      "name": "Bluetick Coonhound Harrier  (Bluetick Coonhound x Harrier mix)"
    },
    {
      "name": "Bluetick Rat Terrier  (Bluetick Coonhound x Rat Terrier mix)"
    },
    {
      "name": "Bluetick Walker  (Bluetick Coonhound x Treeing Walker Coonhound mix)"
    },
    {
      "name": "BoDach  (Boston Terrier x Dachshund mix)"
    },
    {
      "name": "BoJack  (Boston Terrier x Jack Russell Terrier mix)"
    },
    {
      "name": "Bocker  (Beagle x Cocker Spaniel mix)"
    },
    {
      "name": "Bodacion  (Border Collie x Dalmatian mix)"
    },
    {
      "name": "Boerboel Bernard  (Boerboel x Saint Bernard mix)"
    },
    {
      "name": "Boerboel Pei  (Boerboel x Shar Pei mix)"
    },
    {
      "name": "Boerboel Pit  (Boerboel x Pit Bull Terrier mix)"
    },
    {
      "name": "Boglen Terrier  (Beagle x Boston Terrier mix)"
    },
    {
      "name": "Bogle  (Beagle x Boxer mix)"
    },
    {
      "name": "Bolochi  (Bolognese x Chihuahua mix)"
    },
    {
      "name": "BoloTzu  (Bolognese x Shih Tzu mix)"
    },
    {
      "name": "Bologco  (Bolognese x Cocker Spaniel mix)"
    },
    {
      "name": "Bololgnese Bolonka  (Bichon Bolognese x Russian Tsvetnaya Bolonka mix)"
    },
    {
      "name": "Bolonauzer  (Bolognese x Schnauzer mix)"
    },
    {
      "name": "Bolonoodle  (Bolognese x Poodle mix)"
    },
    {
      "name": "Bolosilk  (Bolognese x Silky Terrier mix)"
    },
    {
      "name": "Borador  (Border Collie x Labrador Retriever mix)"
    },
    {
      "name": "Bordeaux Pitbull  (Dogue de Bordeaux x Pit Bull mix)"
    },
    {
      "name": "Border Akbash Collie  (Border Collie x Akbash Dog mix)"
    },
    {
      "name": "Border Akita Collie  (Border Collie x Akita mix)"
    },
    {
      "name": "BorderAussie  (Australian Shepherd x Border Collie mix)"
    },
    {
      "name": "Border Aussie Terrollie  (Border Collie x Australian Terrier mix)"
    },
    {
      "name": "Border Basset  (Border Collie x Basset Hound mix)"
    },
    {
      "name": "Border Beagle  (Border Collie x Beagle mix)"
    },
    {
      "name": "Border Bluetick Collie  (Border Collie x Bluetick Coonhound mix)"
    },
    {
      "name": "Border Chow  (Border Collie x Chow Chow mix)"
    },
    {
      "name": "Border Collie Bernard  (Border Collie x Saint Bernard mix)"
    },
    {
      "name": "Border Collie Britt  (Border Collie x Brittany Spaniel mix)"
    },
    {
      "name": "Border Collie Bull Staffy  (Border Collie x Staffordshire Bull Terrier mix)"
    },
    {
      "name": "Border Collie Cocker  (Border Collie x Cocker Spaniel mix)"
    },
    {
      "name": "Border Collie Lakeland  (Border Collie x Lakeland Terrier mix)"
    },
    {
      "name": "Border Collie Pit  (Border Collie x Pit Bull Terrier mix)"
    },
    {
      "name": "Border Collie Pyrenees  (Border Collie x Great Pyrenees mix)"
    },
    {
      "name": "Border Heeler  (Border Collie x Australian Cattle Dog (Blue Heeler) mix)"
    },
    {
      "name": "Border Jack  (Border Collie x Jack Russell Terrier mix)"
    },
    {
      "name": "Border Kelpie  (Border Collie x Australian Kelpie mix)"
    },
    {
      "name": "Border Malamute Collie  (Border Collie x Alaskan Malamute mix)"
    },
    {
      "name": "Border Malamute Terrier  (Border Terrier x Alaskan Malamute mix)"
    },
    {
      "name": "Border Newfie  (Border Collie x Newfoundland mix)"
    },
    {
      "name": "Border Point  (Border Collie x Pointer mix)"
    },
    {
      "name": "Border Pom  (Border Collie x Pomeranian mix)"
    },
    {
      "name": "Border Rottie  (Border Collie x Rottweiler mix)"
    },
    {
      "name": "Border Schnollie  (Border Collie x Schnauzer mix)"
    },
    {
      "name": "Border Sheepdog  (Border Collie x Shetland Sheepdog mix)"
    },
    {
      "name": "Border Springer  (Border Collie x English Springer Spaniel mix)"
    },
    {
      "name": "Border Stack  (Border Collie mixed with Jack Russell Terrier x Staffordshire Bull Terrier mix)"
    },
    {
      "name": "Border Whipollie  (Border Collie x Whippet mix)"
    },
    {
      "name": "Bordernese  (Bernese Mountain Dog x Border Collie mix)"
    },
    {
      "name": "Bordoodle  (Border Collie x Poodle mix)"
    },
    {
      "name": "Borgi  (Border Collie x Welsh Corgi mix)"
    },
    {
      "name": "Borollie  (Border Collie x Collie mix)"
    },
    {
      "name": "Bosapso  (Boston Terrier x Lhasa Apso mix)"
    },
    {
      "name": "BoShih  (Boston Terrier x Shih Tzu mix)"
    },
    {
      "name": "Boskimo  (American Eskimo x Boston Terrier mix)"
    },
    {
      "name": "Bosmaraner  (Boston Terrier x Weimaraner mix)"
    },
    {
      "name": "Bospin  (Boston Terrier x Miniature Pinscher mix)"
    },
    {
      "name": "BossiPoo  (Boston Terrier x Poodle mix)"
    },
    {
      "name": "Bossie  (Boston Terrier x Australian Shepherd mix)"
    },
    {
      "name": "Bostalian  (Boston Terrier x Italian Greyhound mix)"
    },
    {
      "name": "Bostchon  (Boston Terrier x Bichon Frise mix)"
    },
    {
      "name": "Bostie  (Boston Terrier x West Highland White Terrier mix)"
    },
    {
      "name": "Bostillon  (Boston Terrier x Papillon mix)"
    },
    {
      "name": "Bostinese  (Boston Terrier x Pekingese mix)"
    },
    {
      "name": "Boston Border Collie  (Boston Terrier x Border Collie mix)"
    },
    {
      "name": "Boston Boxer  (Boston Terrier x Boxer mix)"
    },
    {
      "name": "Boston Cattle Dog  (Australian Cattle Dog x Boston Terrier mix)"
    },
    {
      "name": "Boston Chin  (Boston Terrier x Japanese Chin mix)"
    },
    {
      "name": "Boston Huahua  (Boston Terrier x Chihuahua mix)"
    },
    {
      "name": "Boston Iggy  (Boston Terrier x Italian Greyhound mix)"
    },
    {
      "name": "Boston Lab  (Boston Terrier x Labrador Retriever mix)"
    },
    {
      "name": "Boston Malterrier  (Boston Terrier x Maltese mix)"
    },
    {
      "name": "Boston Mastiff Terrier  (Boston Terrier x English Mastiff mix)"
    },
    {
      "name": "Boston Spaniel  (Boston Terrier x Cocker Spaniel mix)"
    },
    {
      "name": "Boston Yorkie  (Boston Terrier x Yorkshire Terrier mix)"
    },
    {
      "name": "Bouberman  (Bouvier des Flandres x Doberman Pinscher mix)"
    },
    {
      "name": "Bouvador  (Bouvier des Flandres x Labrador Retriever mix)"
    },
    {
      "name": "Boweimar  (Boxer x Weimaraner mix)"
    },
    {
      "name": "Bowzer  (Basset Hound x Miniature Schnauzer mix)"
    },
    {
      "name": "BoxaPug  (Boxer x Pug mix)"
    },
    {
      "name": "BoxaShar  (Boxer x SharPei mix)"
    },
    {
      "name": "Box Heeler  (Boxer x Blue Heeler mix)"
    },
    {
      "name": "Boxer Bloodhound  (Bloodhound x Boxer mix)"
    },
    {
      "name": "Boxer Chow  (Boxer x Chow Chow mix)"
    },
    {
      "name": "Boxer Jack  (Boxer x Jack Russell Terrier mix)"
    },
    {
      "name": "Boxer Shepherd  (Boxer x German Shepherd mix)"
    },
    {
      "name": "Boxer Whippet  (Boxer x Whippet mix)"
    },
    {
      "name": "Boxachi  (Boxer x Chihuahua mix)"
    },
    {
      "name": "Boxador  (Boxer x Labrador Retriever mix)"
    },
    {
      "name": "Boxane  (Boxer x Great Dane mix)"
    },
    {
      "name": "Boxapoint  (Boxer x German Shorthaired Pointer mix)"
    },
    {
      "name": "Boxer Basset  (Boxer x Basset Hound mix)"
    },
    {
      "name": "Boxerdoodle  (Boxer x Poodle mix)"
    },
    {
      "name": "Boxerman  (Boxer x Doberman Pinscher mix)"
    },
    {
      "name": "Boxita  (Akita x Boxer mix)"
    },
    {
      "name": "Boxmas  (Boxer x Mastiff mix)"
    },
    {
      "name": "Boxmatian  (Boxer x Dalmatian mix)"
    },
    {
      "name": "Boxollie  (Boxer x Collie mix)"
    },
    {
      "name": "Boxsky  (Boxer x Siberian Husky mix)"
    },
    {
      "name": "Boxspring  (Boxer x English Springer Spaniel mix)"
    },
    {
      "name": "Boxweiler  (Rottweiler x Boxer mix)"
    },
    {
      "name": "Brat  (Boston Terrier x Rat Terrier mix)"
    },
    {
      "name": "Bridoodle  (Briard x Poodle mix)"
    },
    {
      "name": "Brittany Beagle  (Brittany x Beagle mix)"
    },
    {
      "name": "Brittany Bourbonnais  (Brittany Spaniel x Braque du Bourbonnais mix)"
    },
    {
      "name": "Brittnepoo  (Brittany Spaniel x Poodle mix)"
    },
    {
      "name": "Broholmer Pit  (Broholmer x American Pit Bull Terrier mix)"
    },
    {
      "name": "Broodle Griffon  (Brussels Griffon x Poodle mix)"
    },
    {
      "name": "Brottweiler  (Brussels Griffon x Rottweiler mix)"
    },
    {
      "name": "Brug  (Brussels Griffon x Pug mix)"
    },
    {
      "name": "Brussalier  (Brussels Griffon x Cavalier King Charles Spaniel mix)"
    },
    {
      "name": "Brusselranian  (Brussels Griffon x Pomeranian mix)"
    },
    {
      "name": "Brusston  (Boston Terrier x Brussels Griffon mix)"
    },
    {
      "name": "BT Walker  (Boxer x Treeing Walker Coonhound mix)"
    },
    {
      "name": "Buggs  (Boston Terrier x Pug mix)"
    },
    {
      "name": "BullAussie  (English Bulldog x Australian Shepherd mix)"
    },
    {
      "name": "BullBoxer  (English Bulldog x Boxer mix)"
    },
    {
      "name": "Bull Chow Terrier  (Bull Terrier x Chow Chow mix)"
    },
    {
      "name": "Bull Daniff  (Bullmastiff x Great Dane mix)"
    },
    {
      "name": "Bull Greyhound Terrier  (Greyhound x Bull Terrier mix)"
    },
    {
      "name": "Bull Heeler Terrier  (Bull Terrier x Australian Cattle Dog mix)"
    },
    {
      "name": "Bull Jack  (Bulldog x Jack Russell Terrier mix)"
    },
    {
      "name": "Bull Mastweiler  (Bullmastiff x Rottweiler mix)"
    },
    {
      "name": "BullPei  (Bulldog x Chinese SharPei mix)"
    },
    {
      "name": "Bullador  (English Bulldog x Labrador Retriever mix)"
    },
    {
      "name": "Bullbasset Mastiff  (Bullmastiff x Basset Hound mix)"
    },
    {
      "name": "Bullboxer Pit  (Boxer x American Pit Bull Terrier mix)"
    },
    {
      "name": "Bullboxer Staff  (Boxer x American Staffordshire Terrier mix)"
    },
    {
      "name": "Bullboxer Staffy Bull  (Boxer x Staffordshire Bull Terrier mix)"
    },
    {
      "name": "Bulldog Schnauzer  (Bulldog (English) x Miniature Schnauzer mix)"
    },
    {
      "name": "Bullhuahua  (Bulldog x Chihuahua mix)"
    },
    {
      "name": "Bullhuahua Terrier  (Bull Terrier x Chihuahua mix)"
    },
    {
      "name": "Bullkita  (American Bulldog x Akita mix)"
    },
    {
      "name": "Bullmasador  (Bullmastiff x Labrador Retriever mix)"
    },
    {
      "name": "Bullmastiff Shepherd  (Bullmastiff x German Shepherd mix)"
    },
    {
      "name": "Bullmatian  (Bulldog x Dalmatian mix)"
    },
    {
      "name": "Bullmatian Terrier  (Bull Terrier x Dalmatian mix)"
    },
    {
      "name": "Bulloxer  (Boxer x American Bulldog mix)"
    },
    {
      "name": "Bullsky Mastiff  (Bullmastiff x Siberian Husky mix)"
    },
    {
      "name": "Bullwhip  (Bulldog x Whippet mix)"
    },
    {
      "name": "Bully Basset  (Basset Hound x Bulldog mix)"
    },
    {
      "name": "Bully Bordeaux  (Bullmastiff x Dogue de Bordeaux mix)"
    },
    {
      "name": "Bully Chi  (American Bully x Chihuahua mix)"
    },
    {
      "name": "Bully Kutta Lab  Bully Kutta x Labrador Retriever mix"
    },
    {
      "name": "Bully Jack Terrier  (Bull Terrier x Jack Russell Terrier mix)"
    },
    {
      "name": "Bully Pitsky  (American Bully x Siberian Husky or Alaskan Husky mix)"
    },
    {
      "name": "BullyTzu  (Bulldog x Shih Tzu mix)"
    },
    {
      "name": "Bully Wheaten  (Bulldog x Soft Coated Wheaten Terrier mix)"
    },
    {
      "name": "Bullypit  (American Bulldog x American Pit Bull Terrier mix)"
    },
    {
      "name": "Bushland Terrier  (Cairn Terrier x Scottish Terrier mix)"
    },
    {
      "name": "Cadoodle  (Collie x Poodle mix)"
    },
    {
      "name": "Cairanian  (Cairn Terrier x Pomeranian mix)"
    },
    {
      "name": "Cairicocker  (Cairn Terrier x Cocker Spaniel mix)"
    },
    {
      "name": "Cairland Terrier  (Cairn Terrier x Westie mix)"
    },
    {
      "name": "Cairmal  (Cairn Terrier x Maltese mix)"
    },
    {
      "name": "Cairn Beagle  (Cairn Terrier x Beagle mix)"
    },
    {
      "name": "Cairn Chin  (Cairn Terrier x Japanese Chin mix)"
    },
    {
      "name": "Carin Australian Shepterrier  (Australian Shepherd x Cairn Terrier mix)"
    },
    {
      "name": "Cairn Corgi  (Cairn Terrier x Welsh Corgi mix)"
    },
    {
      "name": "Cairnese  (Cairn Terrier x Havanese mix)"
    },
    {
      "name": "Cairnoodle  (Cairn Terrier x Poodle mix)"
    },
    {
      "name": "Cairnwich Terrier  (Cairn Terrier x Norwich Terrier mix)"
    },
    {
      "name": "Cairoston  (Cairn Terrier x Boston Terrier mix)"
    },
    {
      "name": "Cane Corxer  (Cane Corso Italiano x Boxer mix)"
    },
    {
      "name": "Cardigan Corgi Pointer  (Cardigan Welsh Corgi x Pointer mix)"
    },
    {
      "name": "Cardigan Corman Shepherd  (Cardigan Welsh Corgi x German Shepherd mix)"
    },
    {
      "name": "Cardigan Corswiss  (Cardigan Welsh Corgi x Greater Swiss Mountain Dog mix)"
    },
    {
      "name": "Cardigan Pembroke Corgi  (Cardigan Welsh Corgi x Pembroke Welsh Corgi mix)"
    },
    {
      "name": "CareTzu  (Cairn Terrier x Shih Tzu mix)"
    },
    {
      "name": "Carengi  (Carolina Dog x Basenji mix)"
    },
    {
      "name": "Carkie  (Cairn Terrier x Yorkshire Terrier mix)"
    },
    {
      "name": "Carnauzer  (Cairn Terrier x Miniature Schnauzer mix)"
    },
    {
      "name": "Catahoula Bulldog  (Louisiana Catahoula Leopard Dog x American Bulldog mix)"
    },
    {
      "name": "Catahoula Dane  (Catahoula Leopard Dog x Great Dane mix)"
    },
    {
      "name": "Catahoula English Bulldog  (Louisiana Catahoula Leopard Dog x English Bulldog mix)"
    },
    {
      "name": "Catahoula Heeler  (Louisiana Catahoula Leopard Dog x Australian Cattle Dog mix)"
    },
    {
      "name": "Catahoula Rottie  (Louisiana Catahoula Leopard Dog x Rottweiler mix)"
    },
    {
      "name": "Catahoula Whippet  (Louisiana Catahoula Leopard Dog x Whippet mix)"
    },
    {
      "name": "Cattle Collie Dog  (Australian Cattle Dog x Collie mix)"
    },
    {
      "name": "Cattle Shepherd  (Australian Cattle Dog x German Shepherd mix)"
    },
    {
      "name": "Caucasian Husky  (Caucasian Shepherd Dog x Husky mix)"
    },
    {
      "name": "Caucasian Staffy Bull  (Caucasian Shepherd Dog x Staffordshire Bull Terrier mix)"
    },
    {
      "name": "CavAMalt  (Cavalier King Charles x Maltese mix)"
    },
    {
      "name": "CavAMo  (American Eskimo x Cavalier King Charles Spaniel mix)"
    },
    {
      "name": "CavaChin  (Cavalier King Charles x Japanese Chin mix)"
    },
    {
      "name": "CavaCorgi  (Cavalier King Charles Spaniel x Pembroke Welsh Corgi mix)"
    },
    {
      "name": "CavAJack  (Cavalier King Charles Spaniel x Jack Russell Terrier mix)"
    },
    {
      "name": "Cava Inu  (Cavalier King Charles Spaniel x Shiba Inu mix)"
    },
    {
      "name": "Cavalon  (Cavalier King Charles x Papillon mix)"
    },
    {
      "name": "CavaTzu  (Cavalier King Charles x Shih Tzu mix)"
    },
    {
      "name": "Cavachon  (Bichon Frise x Cavalier King Charles Spaniel mix)"
    },
    {
      "name": "Cavador  (Cavalier King Charles Spaniel x Labrador Retriever mix)"
    },
    {
      "name": "Cavanese  (Cavalier King Charles Spaniel x Havanese mix)"
    },
    {
      "name": "Cavapom  (Cavalier King Charles Spaniel x Pomeranian mix)"
    },
    {
      "name": "Cavapoo  (Cavalier King Charles Spaniel x Poodle mix)"
    },
    {
      "name": "Cavaton  (Cavalier King Charles x Coton de Tulear mix)"
    },
    {
      "name": "CavaShell  (Cavalier King Charles Spaniel x Shetland Sheepdog mix)"
    },
    {
      "name": "Cavestie  (Cavalier King Charles Spaniel x West Highland White Terrier mix)"
    },
    {
      "name": "Cavottish  (Cavalier King Charles x Scottish Terrier mix)"
    },
    {
      "name": "Chabrador  (Chow Chow x Labrador Retriever mix)"
    },
    {
      "name": "Chatham Hill Retriever  (FlatCoated Retriever x Cocker Spaniel mix)"
    },
    {
      "name": "Chatterdale  (Chihuahua x Patterdale mix)"
    },
    {
      "name": "Cheagle  (Chihuahua x Beagle mix)"
    },
    {
      "name": "Cheeks  (Chihuahua x Pekingese mix)"
    },
    {
      "name": "Cheenese  (Chihuahua x Havanese mix)"
    },
    {
      "name": "Cherokee Monarch  (Papillon x Russian Toy Terrier mix)"
    },
    {
      "name": "ChesaPoo  (Chesapeake Bay Retriever x Poodle mix)"
    },
    {
      "name": "Chesador  (Chesapeake Bay Retriever x Labrador Retriever mix)"
    },
    {
      "name": "Crested Boxer  (Chinese Crested x Boxer mix)"
    },
    {
      "name": "Chestie  (Chihuahua x West Highland White Terrier mix)"
    },
    {
      "name": "Chi Apso  (Chihuahua x Lhasa Apso mix)"
    },
    {
      "name": "ChiChi  (Chihuahua x Chinese Crested mix)"
    },
    {
      "name": "ChiChon  (Bichon Frise x Chihuahua mix)"
    },
    {
      "name": "Chidale  (Chihuahua x Airedale Terrier mix)"
    },
    {
      "name": "ChiPoo  (Chihuahua x Poodle mix)"
    },
    {
      "name": "ChiSpaniel  (Chihuahua x Cocker Spaniel mix)"
    },
    {
      "name": "Chi Staffy  (Chihuahua x Staffordshire Terrier mix)"
    },
    {
      "name": "Chi Staffy Bull  (Chihuahua x Staffordshire Bull Terrier mix)"
    },
    {
      "name": "Chigi  (Chihuahua x Corgi mix)"
    },
    {
      "name": "Chilier  (Cavalier King Charles x Chihuahua mix)"
    },
    {
      "name": "Chimation  (Chihuahua x Dalmatian mix)"
    },
    {
      "name": "Chimo  (Chihuahua x American Eskimo Dog mix)"
    },
    {
      "name": "Chin Crested  (Chinese Crested x Japanese Chin mix)"
    },
    {
      "name": "ChinFenpinscher  (Affenpinscher x Japanese Chin mix)"
    },
    {
      "name": "ChinOcker  (Cocker Spaniel x Japanese Chin mix)"
    },
    {
      "name": "ChinPin  (Miniature Pinscher x Japanese Chin mix)"
    },
    {
      "name": "Chinwa  (Chihuahua x Japanese Chin mix)"
    },
    {
      "name": "China Jack  (Chinese Crested x Jack Russell Terrier mix)"
    },
    {
      "name": "Chinaranian  (Chinese Crested x Pomeranian mix)"
    },
    {
      "name": "Chineranian  (Japanese Chin x Pomeranian mix)"
    },
    {
      "name": "Chinese Crestepoo  (Chinese Crested x Poodle mix)"
    },
    {
      "name": "Chinese Crestese  (Chinese Crested x Maltese mix)"
    },
    {
      "name": "Chinese Frise  (Bichon Frise x Chinese Crested mix)"
    },
    {
      "name": "Chion  (Chihuahua x Papillon mix)"
    },
    {
      "name": "Chipin  (Chihuahua x Miniature Pinscher mix)"
    },
    {
      "name": "Chipit  (Chihuahua x American Pit Bull Terrier mix)"
    },
    {
      "name": "Chisenji  (Chihuahua x Basenji mix)"
    },
    {
      "name": "Chiweenie  (Chihuahua x Dachshund mix)"
    },
    {
      "name": "Chiwoxy  (Chihuahua x Wire Fox Terrier mix)"
    },
    {
      "name": "Chizer  (Chihuahua x Miniature Schnauzer mix)"
    },
    {
      "name": "Chonzer  (Bichon Frise x Miniature Schnauzer mix)"
    },
    {
      "name": "Chorkie  (Chihuahua x Yorkshire Terrier mix)"
    },
    {
      "name": "Chow Hound Basset  (Chow Chow x Basset Hound mix)"
    },
    {
      "name": "Chow Pei  (Chow Chow x Shar Pei mix)"
    },
    {
      "name": "Chowpit  (Chow Chow x American Pit Bull Terrier mix)"
    },
    {
      "name": "Chow Shepherd  (Chow Chow x Shepherd mix)"
    },
    {
      "name": "Chug  (Chihuahua x Pug mix)"
    },
    {
      "name": "Chusky  (Chow Chow x Siberian Husky mix)"
    },
    {
      "name": "Chussel  (Brussels Griffon x Chihuahua mix)"
    },
    {
      "name": "Chuvasz  (Chow Chow x Kuvasz mix)"
    },
    {
      "name": "Carillon  (Cairn Terrier x Papillon mix)"
    },
    {
      "name": "Clumber Lab  (Clumber Spaniel x Labrador Retriever mix)"
    },
    {
      "name": "Clumber Pei  (Clumber Spaniel x Chinese Shar Pei mix)"
    },
    {
      "name": "Clumberton  (Clumber Spaniel x Bedlington Terrier mix)"
    },
    {
      "name": "Cluminger Spaniel  (Clumber Spaniel x English Springer mix)"
    },
    {
      "name": "Clumberstiff  (Clumber Spaniel x Bullmastiff mix)"
    },
    {
      "name": "CockAChon  (Bichon Frise x Cocker Spaniel mix)"
    },
    {
      "name": "CockAMo  (American Eskimo x Cocker Spaniel mix)"
    },
    {
      "name": "CockATzu  (Cocker Spaniel x Shih Tzu mix)"
    },
    {
      "name": "Cockalier  (Cavalier King Charles x Cocker Spaniel mix)"
    },
    {
      "name": "Cockapin  (Cocker Spaniel x Miniature Pinscher mix)"
    },
    {
      "name": "Cockapoo  (Cocker Spaniel x Poodle mix)"
    },
    {
      "name": "Cocker Chow  (Cocker Spaniel x Chow Chow mix)"
    },
    {
      "name": "Cocker Griffon  (Cocker Spaniel x Brussels Griffon mix)"
    },
    {
      "name": "Cocker Jack  (Cocker Spaniel x Jack Russell Terrier mix)"
    },
    {
      "name": "CockerPei  (Cocker Spaniel x Chinese Shar Pei mix)"
    },
    {
      "name": "Cocker Pug  (Cocker Spaniel x Pug mix)"
    },
    {
      "name": "Cocker Sheltie  (Cocker Spaniel x Shetland Sheepdog mix)"
    },
    {
      "name": "CockerTon  (Cocker Spaniel x Coton de Tulear mix)"
    },
    {
      "name": "Cocker Weim  (Cocker Spaniel x Weimaraner mix)"
    },
    {
      "name": "Cocker Westie  (Cocker Spaniel x West Highland White Terrier mix)"
    },
    {
      "name": "Cocker Wheaten  (Cocker Spaniel x Soft Coated Wheaten Terrier mix)"
    },
    {
      "name": "Cockeranian  (Cocker Spaniel x Pomeranian mix)"
    },
    {
      "name": "Cockerbull  (Cocker Spaniel x English Bulldog mix)"
    },
    {
      "name": "Cockinese  (Cocker Spaniel x Pekingese mix)"
    },
    {
      "name": "Cojack  (Jack Russell Terrier x Pembroke Welsh Corgi mix)"
    },
    {
      "name": "Collie Pyrenees  (Collie x Great Pyrenees mix)"
    },
    {
      "name": "Colonial Cocker Spaniel  (American Cocker Spaniel x English Cocker Spaniel mix)"
    },
    {
      "name": "Confetti Australian Shepherd  (Australian Shepherd x Miniature Schnauzer mix)"
    },
    {
      "name": "Copica  (Corgi x Cockapoo mix)"
    },
    {
      "name": "Corgi Basset  (Basset Hound x Welsh Corgi mix)"
    },
    {
      "name": "Corgi Bichon  (Corgi x Bichon Frise mix)"
    },
    {
      "name": "Corgi Cattle Dog  (Australian Cattle Dog x Pembroke Welsh Corgi mix)"
    },
    {
      "name": "CorgiFlat  (Corgi x FlatCoated Retriever mix)"
    },
    {
      "name": "Corgi Pit  (Welsh Corgi x American Pit Bull Terrier mix)"
    },
    {
      "name": "Corgi Pointer  (Corgi x Pointer mix)"
    },
    {
      "name": "Corgi Pug  (Welsh Corgi x Pug mix)"
    },
    {
      "name": "Corgi Schip  (Welsh Corgi x Schipperke mix)"
    },
    {
      "name": "Corgidor  (Labrador Retriever x Corgi mix)"
    },
    {
      "name": "Corgipoo  (Corgi x Poodle mix)"
    },
    {
      "name": "Corgiranian  (Corgi x Pomeranian mix)"
    },
    {
      "name": "Corillon  (Papillon x Pembroke Welsh Corgi mix)"
    },
    {
      "name": "Corkie  (Cocker Spaniel x Yorkie mix)"
    },
    {
      "name": "Corman Shepherd  (Corgi x German Shepherd mix)"
    },
    {
      "name": "Corpin  (Corgi x Miniature Pinscher mix)"
    },
    {
      "name": "Corsengi (Welsh Corgi x Basenji mix)"
    },
    {
      "name": "Corswiss  (Welsh Corgi x Greater Swiss Mountain Dog mix)"
    },
    {
      "name": "Cortese  (Welsh Corgi x Maltese mix)"
    },
    {
      "name": "Cosheltie  (Collie x Shetland Sheepdog mix)"
    },
    {
      "name": "CotonBeagle  (Coton de Tulear x Beagle mix)"
    },
    {
      "name": "Coton Bolonka  (Coton de Tulear x Russian Tsvetnaya Bolonka mix)"
    },
    {
      "name": "Coton Chin  (Coton de Tulear x Japanese Chin mix)"
    },
    {
      "name": "Coton Eskimo  (American Eskimo x Coton de Tulear mix)"
    },
    {
      "name": "Coton Miki  (Coton de Tulear x Miki mix)"
    },
    {
      "name": "Coton Schnauzer  (Coton de Tulear x Miniature Schnauzer mix)"
    },
    {
      "name": "Coton Tzu  (Coton De Tulear x Shih Tzu mix)"
    },
    {
      "name": "Cotonese  (Coton de Tulear x Maltese mix)"
    },
    {
      "name": "Cotralian  (Cocker Spaniel x Australian Shepherd mix)"
    },
    {
      "name": "Cotralian  (Cocker Spaniel x Standard, Miniature or Toy Australian Shepherd mix)"
    },
    {
      "name": "Coydog  (Domestic Dog x Coyote mix)"
    },
    {
      "name": "Crested Apso = (Chinese Crested x Lhasa Apso mix)"
    },
    {
      "name": "Crested Beagle  (Chinese Crested x Beagle mix)"
    },
    {
      "name": "Crested Cavalier  (Chinese Crested x Cavalier King Charles Spaniel mix)"
    },
    {
      "name": "Crested Chin  (Chinese Crested x Chin mix)"
    },
    {
      "name": "Crested Cocker  (Chinese Crested x Cocker Spaniel mix)"
    },
    {
      "name": "Crested Havanese  (Chinese Crested x Havanese mix)"
    },
    {
      "name": "Crested Malt  (Chinese Crested x Maltese mix)"
    },
    {
      "name": "Crested Peke  (Chinese Crested x Pekingese mix)"
    },
    {
      "name": "Crested Schnauzer  (Chinese Crested x Miniature Schnauzer mix)"
    },
    {
      "name": "Crested Tzu  (Chinese Crested x Shih Tzu mix)"
    },
    {
      "name": "Crested Westie  (Chinese Crested x West Highland White Terrier)"
    },
    {
      "name": "Crestoxie  (Chinese Crested x Dachshund mix)"
    },
    {
      "name": "Croatian Sheepsky  (Croatian Sheepdog x Siberian Husky mix)"
    },
    {
      "name": "Crustie  (Chinese Crested x Yorkshire Terrier mix)"
    },
    {
      "name": "Cursset  (Black Mouth Cur x Basset Hound mix)"
    },
    {
      "name": "DachGriffon  (Dachshund x Brussels Griffon mix)"
    },
    {
      "name": "Dachsador  (Dachshund x Labrador Retriever mix)"
    },
    {
      "name": "Dachsi Apso  (Dachshund x Lhasa Apso mix)"
    },
    {
      "name": "Dachsweiler  (Dachshund x Rottweiler mix)"
    },
    {
      "name": "Daisy Dog  (Bichon x Poodle x ShihTzu mix)"
    },
    {
      "name": "Dalmadoodle  (Dalmatian x Poodle mix)"
    },
    {
      "name": "Dalmador  (Labrador Retriever x Dalmatian mix)"
    },
    {
      "name": "Dalmatian Feist  (Dalmatian x Mountain Feist mix)"
    },
    {
      "name": "Dalmatian Heeler (Dalmatian x Australian Cattle Dog mix)"
    },
    {
      "name": "Dalmatian Husky  (Dalmatian x Siberian Husky mix)"
    },
    {
      "name": "Dalmatian Springer  (Dalmatian x English Springer Spaniel mix)"
    },
    {
      "name": "Dameranian  (Dachshund x Pomeranian mix)"
    },
    {
      "name": "Dane Shepherd  (Great Dane x German Shepherd mix)"
    },
    {
      "name": "Daniff  (Great Dane x Mastiff mix)"
    },
    {
      "name": "Dashalier  (Dachshund x Cavalier King Charles Spaniel mix)"
    },
    {
      "name": "Daug  (Dachshund x Pug mix)"
    },
    {
      "name": "Decker Brat  (Decker Hunting Terrier x Boston Terrier mix)"
    },
    {
      "name": "Deerhound Shepherd  (Scottish Deerhound x German Shepherd mix)"
    },
    {
      "name": "Dingo Kelpie  (Dingo x Australian Kelpie mix)"
    },
    {
      "name": "Dingo Podenco  (Dingo x Andalusian Podenco mix)"
    },
    {
      "name": "Doberman Greyhound  (Doberman Pinscher x Greyhound mix)"
    },
    {
      "name": "Doberdane  (Doberman Pinscher x Great Dane mix)"
    },
    {
      "name": "Doberdor  (Doberman Pinscher x Labrador Retriever mix)"
    },
    {
      "name": "Doberghan  (Doberman Pinscher x Afghan Hound mix)"
    },
    {
      "name": "Doberman Bulldog  (Doberman Pinscher x Bulldog mix)"
    },
    {
      "name": "Doberman Collie  (Doberman Pinscher x Collie mix)"
    },
    {
      "name": "Doberman Pit  (Doberman Pinscher x American Pit Bull Terrier mix)"
    },
    {
      "name": "Doberman Shepherd  (Doberman Pinscher x German Shepherd mix)"
    },
    {
      "name": "DobieBasset  (Doberman Pinscher x Basset Hound mix)"
    },
    {
      "name": "Dobie Foxhound  (Doberman Pinscher x American Foxhound mix)"
    },
    {
      "name": "Dobie Heeler  (Doberman Pinscher x Australian Cattle Dog mix)"
    },
    {
      "name": "Dobie Schnauzer  (Doberman Pinscher x Schnauzer mix)"
    },
    {
      "name": "Dobieton  (Doberman Pinscher x Boston Terrier mix)"
    },
    {
      "name": "Dobocker  (Doberman Pinscher x Cocker Spaniel mix)"
    },
    {
      "name": "Dobsky  (Doberman Pinscher x Old English Sheepdog mix)"
    },
    {
      "name": "Docker  (Dachshund x Cocker Spaniel mix)"
    },
    {
      "name": "Dogo Pit  (Dogo Argentino x Pit Bull Terrier mix)"
    },
    {
      "name": "Dogue Brasileiro  (Bull Terrier x Boxer mix)"
    },
    {
      "name": "Dogue de Boxer  (Boxer x Dogue de Bordeaux mix)"
    },
    {
      "name": "Doguedoodle  (Dogue de Bordeaux x Poodle mix)"
    },
    {
      "name": "Doodleman Pinscher  (Doberman x Standard Poodle mix)"
    },
    {
      "name": "Dorgi  (Dachshund x Corgi mix)"
    },
    {
      "name": "Dorkie  (Dachshund x Yorkshire Terrier mix)"
    },
    {
      "name": "DoubullMastiff  (Bullmastiff x Mastiff mix)"
    },
    {
      "name": "Double Doodle  (Goldendoodle x Labradoodle mix)"
    },
    {
      "name": "Doxie Cairn  (Cairn Terrier x Dachshund mix)"
    },
    {
      "name": "DoxieChin  (Dachshund x Japanese Chin mix)"
    },
    {
      "name": "DoxieChon  (Bichon Frise x Dachshund mix)"
    },
    {
      "name": "Doxie Heeler  (Australian Cattle Dog x Dachshund mix)"
    },
    {
      "name": "Doxie Scot  (Dachshund x Scottish Terrier mix)"
    },
    {
      "name": "DoxiePin  (Dachshund x Miniature Pinscher mix)"
    },
    {
      "name": "DoxiePit  (Dachshund x American Pit Bull Terrier mix)"
    },
    {
      "name": "Doxiemo  (Dachshund x American Eskimo Dog mix)"
    },
    {
      "name": "Doxiepoo  (Dachshund x Poodle mix)"
    },
    {
      "name": "Doxle  (Beagle x Dachshund mix)"
    },
    {
      "name": "Dualanese  (Bolognese x Havanese mix)"
    },
    {
      "name": "Dusky  (Dachshund x Siberian Husky mix)"
    },
    {
      "name": "Dutchie Chow Shepherd  (Dutch Shepherd x Chow Chow mix)"
    },
    {
      "name": "ElkaBee  (Norwegian Elkhound x Beagle mix)"
    },
    {
      "name": "Elkhound Shepherd  (Norwegian Elkhound x German Shepherd mix)"
    },
    {
      "name": "ElkKee  (Keeshond x Norwegian Elkhound mix)"
    },
    {
      "name": "EngAPoo  (English Toy Spaniel x Poodle mix)"
    },
    {
      "name": "EngaApso  (English Toy Spaniel x Lhasa Apso mix)"
    },
    {
      "name": "Engachon  (Bichon Frise x English Toy Spaniel mix)"
    },
    {
      "name": "EngAm Bulldog x Olde Bulldog  (American Bulldog x English Bulldog mix)"
    },
    {
      "name": "Enganese  (English Toy Spaniel x Havanese mix)"
    },
    {
      "name": "Engatzu Spaniel  (English Toy Spaniel x Shih Tzu mix)"
    },
    {
      "name": "Englian Mastiff  (English Mastiff x Neapolitan Mastiff mix)"
    },
    {
      "name": "English Boodle  (English Bulldog x Poodle mix)"
    },
    {
      "name": "English Borsetter Collie  (Border Collie x English Setter mix)"
    },
    {
      "name": "English BostonBulldog  (Boston Terrier x English Bulldog mix)"
    },
    {
      "name": "English Boxetter  (English Setter x Boxer mix)"
    },
    {
      "name": "English Bull Dane  (English Bulldog x Great Dane mix)"
    },
    {
      "name": "English Bull Springer  (Bulldog x English Springer Spaniel mix)"
    },
    {
      "name": "English Bull Terrier Pit  (Bull Terrier x Pit Bull Terrier mix)"
    },
    {
      "name": "English Bullamute  (Bulldog x Alaskan Malamute mix)"
    },
    {
      "name": "English Bull Staffy  (English Bulldog x American Staffordshire Terrier mix)"
    },
    {
      "name": "English BullWalker  (Bulldog x Treeing Walker mix)"
    },
    {
      "name": "English Bullweiler  (English Bulldog x Rottweiler mix)"
    },
    {
      "name": "English Bulldog Terrier  (English Bulldog x Bull Terrier mix)"
    },
    {
      "name": "English Bulltyme  (English Bulldog x Olde Tyme Bulldog mix)"
    },
    {
      "name": "English Bully Staffy Bull Terrier  (English Bulldog x Staffordshire Bull Terrier mix)"
    },
    {
      "name": "English Catahoula Shepherd  (English Shepherd x Louisiana Catahoula Leopard Dog mix)"
    },
    {
      "name": "English Cocker Chow  (English Cocker Spaniel x Chow Chow mix)"
    },
    {
      "name": "English Collie Shepherd  (English Shepherd x Collie mix)"
    },
    {
      "name": "English Coonoodle  (English Coonhound x Poodle mix)"
    },
    {
      "name": "English Coon Rottie  (American English Coonhound x Rottweiler mix)"
    },
    {
      "name": "English Cotralian  (English Cocker Spaniel x Standard, Miniature or Toy Australian Shepherd mix)"
    },
    {
      "name": "English King  (Cavalier King Charles x English Toy Spaniel mix)"
    },
    {
      "name": "English Lhasa Bull  (English Bulldog x Lhasa Apso mix)"
    },
    {
      "name": "English Mastahoula  (English Mastiff x Louisiana Catahoula Leopard Dog mix)"
    },
    {
      "name": "English Mastweiler  (Mastiff x Rottweiler mix)"
    },
    {
      "name": "English Mini Foxker  (English Cocker Spaniel x Miniature Fox Terrier mix)"
    },
    {
      "name": "English Neo Bull  (Bulldog x Neapolitan Mastiff mix)"
    },
    {
      "name": "English Presa Bulldog  (English Bulldog x Presa Canario mix)"
    },
    {
      "name": "English Spanador  (English Cocker Spaniel x Labrador Retriever mix)"
    },
    {
      "name": "English Spantriever  (English Cocker Spaniel x Labrador Retriever mix)"
    },
    {
      "name": "English Speagle  (Beagle x English Toy Spaniel mix)"
    },
    {
      "name": "English Springerman  (Doberman Pinscher x English Springer Spaniel mix)"
    },
    {
      "name": "English Sprointer  (English Pointer x English Springer Spaniel mix)"
    },
    {
      "name": "English Toy Chin Spaniel  (English Toy Spaniel x Japanese Chin mix)"
    },
    {
      "name": "English Toy Cocker Spaniel  (Cocker Spaniel x English Toy Spaniel mix)"
    },
    {
      "name": "English Toy Griffon  (Brussels Griffon x English Toy Spaniel mix)"
    },
    {
      "name": "English Toy Papillon  (Papillon x English Toy Spaniel mix)"
    },
    {
      "name": "English Toy Spanese  (English Toy Spaniel x Pekingese mix)"
    },
    {
      "name": "Entlebucher Pit  (Entlebucher Mountain Dog x American Pit Bull Terrier mix)"
    },
    {
      "name": "Eskapoo  (American Eskimo Dog x Poodle mix)"
    },
    {
      "name": "Eskenji  (American Eskimo x Basenji mix)"
    },
    {
      "name": "Eskidor  (American Eskimo x Labrador Retriever mix)"
    },
    {
      "name": "Eskifon  (American Eskimo x Brussels Griffon mix)"
    },
    {
      "name": "Eskijack  (American Eskimo x Jack Russell Terrier mix)"
    },
    {
      "name": "Eskimo Chi  (American Eskimo x Chihuahua mix)"
    },
    {
      "name": "Eskimo Chin  (Chin x American Eskimo Dog mix)"
    },
    {
      "name": "Eskimo Pit  (American Pit Bull Terrier x American Eskimo Dog mix)"
    },
    {
      "name": "Eskimo Schnauzer  (American Eskimo x Schnauzer mix)"
    },
    {
      "name": "Eskimo Shepherd  (American Eskimo x German Shepherd mix)"
    },
    {
      "name": "Eskimo Yorkie  (American Eskimo x Yorkshire Terrier mix)"
    },
    {
      "name": "Eskland  (American Eskimo x Shetland Sheepdog mix)"
    },
    {
      "name": "Euro Mountain Sheparnese  (Bernese Mountain Dog x German Shepherd mix)"
    },
    {
      "name": "Ewokian  (Havanese x Pomeranian mix)"
    },
    {
      "name": "Faux Frenchbo Bulldog  (Boston Terrier x French Bulldog mix)"
    },
    {
      "name": "Feist Chi  (Mountain Feist x Chihuahua mix)"
    },
    {
      "name": "Feist Tzu  (Mountain Feist x Shih Tzu mix)"
    },
    {
      "name": "Fila Tosa  (Fila Brasileiro x Japanese Tosa mix)"
    },
    {
      "name": "Finnish Chow Spitz  (Finnish Spitz x Chow Chow mix)"
    },
    {
      "name": "Flandoodle  (Bouvier des Flandres x Poodle mix)"
    },
    {
      "name": "FoTzu  (Shih Tzu x Toy Fox Terrier mix)"
    },
    {
      "name": "Foodle  (Poodle x Toy Fox Terrier mix)"
    },
    {
      "name": "Fourche Terrier  (Westie x Yorkshire Terrier mix)"
    },
    {
      "name": "Foxhoodle  (Fox Hound x Poodle mix)"
    },
    {
      "name": "Foxingese  (Pekingese x Fox Terrier mix)"
    },
    {
      "name": "Foxker  (Cocker Spaniel x Fox Terrier mix)"
    },
    {
      "name": "Foxton  (Boston Terrier x Toy Fox Terrier mix)"
    },
    {
      "name": "Foxy Rat Terrier  (American Rat Terrier x Toy Fox Terrier mix)"
    },
    {
      "name": "Foxy Russell  (Jack Russell Terrier x Toy Fox Terrier mix)"
    },
    {
      "name": "FreeLance Bulldog  (French Bulldog x Bulldog mix)"
    },
    {
      "name": "French Afghan Mastiff  (Dogue de Bordeaux x Afghan Hound mix)"
    },
    {
      "name": "French Buillon  (French Bulldog x Papillon mix)"
    },
    {
      "name": "French Bull Dane  (French Bulldog x Great Dane mix)"
    },
    {
      "name": "French Bull Jack  (French Bulldog x Jack Russell Terrier mix)"
    },
    {
      "name": "French Bull Rat Terrier  (French Bulldog x American Rat Terrier mix)"
    },
    {
      "name": "French Bull Terrier  (French Bulldog x Bull Terrier mix)"
    },
    {
      "name": "French Bull Tzu  (French Bulldog x Shih Tzu mix)"
    },
    {
      "name": "French Bull Weiner  (French Bulldog x Dachshund mix)"
    },
    {
      "name": "French Bullhuahua  (French Bulldog x Chihuahua mix)"
    },
    {
      "name": "French Bullnese  (French Bulldog x Pekingese mix)"
    },
    {
      "name": "French Bulloxer  (Boxer x French Bulldog mix)"
    },
    {
      "name": "French Bullweiler  (French Bulldog x Rottweiler mix)"
    },
    {
      "name": "French MastiBull  (French Bulldog x Mastiff mix)"
    },
    {
      "name": "French Mastahoula  (French Mastiff x Louisiana Catahoula Leopard Dog mix)"
    },
    {
      "name": "French Pin  (French Bulldog x Miniature Pinscher mix)"
    },
    {
      "name": "French West Highlander  (French Bulldog x West Highland White Terrier mix)"
    },
    {
      "name": "Frenchie Bichon  (French Bulldog x Bichon Frise mix)"
    },
    {
      "name": "Frenchie Labrador  (French Bulldog x Labrador Retriever mix)"
    },
    {
      "name": "FrenchiePei  (French Bulldog x Chinese Shar Pei mix)"
    },
    {
      "name": "Frenchie Pug  (French Bulldog x Pug mix)"
    },
    {
      "name": "Frenchie Shepherd  (French Bulldog x German Shepherd mix)"
    },
    {
      "name": "Frenchie Staff  (French Bulldog x American Staffordshire Terrier mix)"
    },
    {
      "name": "Frenchnese  (French Bulldog x Havanese mix)"
    },
    {
      "name": "Frengle  (French Bulldog x Beagle mix)"
    },
    {
      "name": "Froodle  (French Bulldog x Poodle mix)"
    },
    {
      "name": "Gerberian Shepsky  (German Shepherd x Siberian Husky mix)"
    },
    {
      "name": "German Anatolian Shepherd  (German Shepherd x Anatolian Shepherd mix)"
    },
    {
      "name": "German Australian Shepherd  (German Shepherd x Australian Shepherd mix)"
    },
    {
      "name": "German Groenendael  (German Shepherd x Belgian Shepherd mix)"
    },
    {
      "name": "German Hund Pointer  (German Wirehaired Pointer x Dachshund mix)"
    },
    {
      "name": "German Longhaired Sprointer  (German Longhaired Pointer x English Springer Spaniel mix)"
    },
    {
      "name": "German Malinois  (Belgian Malinois x German Shepherd Dog mix)"
    },
    {
      "name": "German Pointeraner  (German Shorthaired Pointer x Weimaraner mix)"
    },
    {
      "name": "German Sheltie Spitz  (German Spitz x Shetland Sheepdog mix)"
    },
    {
      "name": "German Sheprador  (German Shepherd Dog x Labrador Retriever mix)"
    },
    {
      "name": "German Shorthair Toller  (German Shorthaired Pointer x Nova Scotia Duck Tolling Retriever mix)"
    },
    {
      "name": "German Shorthaired Lab  (German Shorthaired Pointer x Labrador Retriever mix)"
    },
    {
      "name": "German Shorthaired Pointerpoodle  (German Shorthaired Pointer x Poodle mix)"
    },
    {
      "name": "German Shorthaired Sprointer  (German Shorthaired Pointer x English Springer Spaniel mix)"
    },
    {
      "name": "German Shorthaired Weimaraner  (German Shorthaired Pointer x Weimaraner mix)"
    },
    {
      "name": "German Spitz Shepherd  (German Spitz x German Shepherd mix)"
    },
    {
      "name": "German Spitzpoo  (German Spitz x Poodle mix)"
    },
    {
      "name": "German Wirehaired Lab  (German Wirehaired Pointer x Labrador Retriever mix)"
    },
    {
      "name": "German Wirehaired Newfie  (German Wirehaired Pointer x Newfoundland mix)"
    },
    {
      "name": "German Wirehaired Pointing Vizsla  (German Wirehaired Pointer x Vizsla mix)"
    },
    {
      "name": "German Wirehaired Pointing Wolfhound  (German Wirehaired Pointer x Irish Wolfhound mix)"
    },
    {
      "name": "German Wirehaired Sprointer  (German Wirehaired Pointer x English Springer Spaniel mix)"
    },
    {
      "name": "German Yorkie Shepherd  (German Shepherd x Yorkshire Terrier mix)"
    },
    {
      "name": "Germanees  (German Shepherd x Great Pyrenees mix)"
    },
    {
      "name": "Giant Bolonauzer  (Bolognese x Giant Schnauzer mix)"
    },
    {
      "name": "Giant Border Schnollie  (Border Collie x Giant Schnauzer mix)"
    },
    {
      "name": "Giant Irish Wolf Schnauzer  (Giant Schnauzer x Irish Wolfhound mix)"
    },
    {
      "name": "Giant Kerry Blue Schnauzer  (Giant Schnauzer x Kerry Blue Terrier mix)"
    },
    {
      "name": "Giant Komondauzer  (Giant Schnauzer x Komondor mix)"
    },
    {
      "name": "Giant Ratzer  (Giant Schnauzer x Rat Terrier mix)"
    },
    {
      "name": "Giant Schnauzer Chin  (Japanese Chin x Giant Schnauzer mix)"
    },
    {
      "name": "Giant Schnoodle  (Giant Schnauzer x Standard Poodle mix)"
    },
    {
      "name": "Giant Wauzer  (Westie x Giant Schnauzer mix)"
    },
    {
      "name": "Giant Wire Hair Snauzer  (Giant Schnauzer x Wire Fox Terrier mix)"
    },
    {
      "name": "Glechon  (Beagle x Bichon Frise mix)"
    },
    {
      "name": "Goberian  (Golden Retriever x Siberian Husky mix)"
    },
    {
      "name": "Golden Akita Retriever  (Golden Retriever x Akita mix)"
    },
    {
      "name": "Golden Border Retriever  (Golden Retriever x Border Collie mix)"
    },
    {
      "name": "Golden Boxer  (Golden Retriever x Boxer mix)"
    },
    {
      "name": "Golden Bulldog  (Golden Retriever x Bulldog mix)"
    },
    {
      "name": "Golden Bullmastiff Retriever  (Bullmastiff x Golden Retriever mix)"
    },
    {
      "name": "Golden Cavalier  (Cavalier King Charles Spaniel x Golden Retriever mix)"
    },
    {
      "name": "Golden Chesabay  (Golden Retriever x Chesapeake Bay Retriever mix)"
    },
    {
      "name": "Golden Chi Retriever  (Golden Retriever x Chihuahua mix)"
    },
    {
      "name": "Golden Chow Retriever  (Golden Retriever x Chow Chow mix)"
    },
    {
      "name": "Golden Cocker Retriever  (Cocker Spaniel x Golden Retriever mix)"
    },
    {
      "name": "Golden Dox  (Golden Retriever x Dachshund mix)"
    },
    {
      "name": "Golden Indian Dog  (Golden Retriever x Native American Indian Dog mix)"
    },
    {
      "name": "Golden Irish  (Golden Retriever x Irish Setter mix)"
    },
    {
      "name": "Golden Jack Retriever  (Golden Retriever x Jack Russell Terrier mix)"
    },
    {
      "name": "Golden Labrador  (Golden Retriever x Labrador Retriever mix)"
    },
    {
      "name": "Golden Mastiff  (Golden Retriever x English Mastiff mix)"
    },
    {
      "name": "Golden Mountain Dog  (Golden Retriever x Bernese Mountain Dog mix)"
    },
    {
      "name": "Golden Newfie  (Golden Retriever x Newfoundland mix)"
    },
    {
      "name": "Golden Pei  (Chinese Shar Pei x Golden Retriever mix)"
    },
    {
      "name": "Golden Pyrenees  (Golden Retriever x Great Pyrenees mix)"
    },
    {
      "name": "Golden Rottie Retriever  (Golden Retriever x Rottweiler mix)"
    },
    {
      "name": "Golden Saint  (Golden Retriever x Saint Bernard mix)"
    },
    {
      "name": "Golden Sammy  (Golden Retriever x Samoyed mix)"
    },
    {
      "name": "Golden Sheltie  (Golden Retriever x Sheltie mix)"
    },
    {
      "name": "Golden Shepherd  (Golden Retriever x German Shepherd mix)"
    },
    {
      "name": "Golden Tibetan Tertriever  (Golden Retriever x Tibetan Terrier mix)"
    },
    {
      "name": "Golden Toller Retriever  (Golden Retriever x Nova Scotia Duck Tolling Retriever mix)"
    },
    {
      "name": "Goldenapso Retriever  (Golden Retriever x Lhasa Apso mix)"
    },
    {
      "name": "Goldendale  (Golden Retriever x Airedale Terrier mix)"
    },
    {
      "name": "Goldenshire  (Golden Retriever x Yorkshire Terrier mix)"
    },
    {
      "name": "Goldendoodle  (Golden Retriever x Poodle mix)"
    },
    {
      "name": "Goldmaraner  (Golden Retriever x Weimaraner mix)"
    },
    {
      "name": "Goldmation  (Golden Retriever x Dalmatian mix)"
    },
    {
      "name": "Gollie  (Golden Retriever x Collie mix)"
    },
    {
      "name": "Gordon Chesabay  (Gordon Setter x Chesapeake Bay Retriever mix)"
    },
    {
      "name": "Gordon Sheltie  (Gordon Setter x Shetland Sheepdog mix)"
    },
    {
      "name": "Gordondoodle  (Gordon Setter x Poodle mix)"
    },
    {
      "name": "Great Bernese  (Bernese Mountain dog x Great Pyrenees mix)"
    },
    {
      "name": "Great Cambrian Shepherd  (Great Pyrenees x Welsh Sheepdog mix)"
    },
    {
      "name": "Great Danebull  (American Pit Bull Terrier x Great Dane mix)"
    },
    {
      "name": "Great Danesky  (Great Dane x Siberian Husky mix)"
    },
    {
      "name": "Great Danoodle  (Great Dane x Poodle mix)"
    },
    {
      "name": "Great Dasenji  (Great Dane x Basenji mix)"
    },
    {
      "name": "Great Golden Dane  (Golden Retriever x Great Dane mix)"
    },
    {
      "name": "Great Keeshees  (Great Pyrenees x Keeshond mix)"
    },
    {
      "name": "Great Pyredane  (Great Dane x Great Pyrenees mix)"
    },
    {
      "name": "Great Weimar  (Great Dane x Weimaraner mix)"
    },
    {
      "name": "Great Wirehaired Gryfenees  (Wirehaired Pointing Griffon x Great Pyrenees mix)"
    },
    {
      "name": "Great Wolfhound  (Great Pyrenees x Irish Wolfhound mix)"
    },
    {
      "name": "Greater Swiss Mountain Dane  (Greater Swiss Mountain Dog x Great Dane mix)"
    },
    {
      "name": "Greater Swiss Rottweiler  (Greater Swiss Mountain Dog x Rottweiler mix)"
    },
    {
      "name": "Greater Welsh Corswiss  (Welsh Corgi x Greater Swiss Mountain Dog mix)"
    },
    {
      "name": "Greyador  (Greyhound x Labrador Retriever mix)"
    },
    {
      "name": "Greybull Pit  (American Pit Bull Terrier x Greyhound mix)"
    },
    {
      "name": "Greyhound Shepherd  (Greyhound x German Shepherd mix)"
    },
    {
      "name": "Griffairn Terrier  (Brussels Griffon x Cairn Terrier mix)"
    },
    {
      "name": "Griffichon  (Bichon Frise x Brussels Griffon mix)"
    },
    {
      "name": "GriffonPei  (Brussels Griffon x Chinese SharPei mix)"
    },
    {
      "name": "Griffonese  (Brussels Griffon x Pekingese mix)"
    },
    {
      "name": "Griffonland  (Brussels Griffon x West Highland White Terrier mix)"
    },
    {
      "name": "Griffonshire  (Brussels Griffon x Yorkshire Terrier mix)"
    },
    {
      "name": "Groenendael Chow  (Belgian Shepherd x Chow Chow mix)"
    },
    {
      "name": "HavaApso  (Havanese x Lhasa Apso mix)"
    },
    {
      "name": "HavaBoston  (Havanese x Boston Terrier mix)"
    },
    {
      "name": "HavaJack  (Havanese x Jack Russell Terrier mix)"
    },
    {
      "name": "Hava Klee  (Havanese x Alaskan Klee Kai)"
    },
    {
      "name": "HavaWelsh  (Havanese x Welsh Terrier mix)"
    },
    {
      "name": "HavaWheat  (Havanese x Soft Coated Wheaten Terrier mix)"
    },
    {
      "name": "Havachin  (Havanese x Japanese Chin mix)"
    },
    {
      "name": "Havachon  (Bichon Frise x Havanese mix)"
    },
    {
      "name": "Havaco  (Havanese x Cocker Spaniel mix)"
    },
    {
      "name": "Havallon  (Havanese x Papillon mix)"
    },
    {
      "name": "Havamalt  (Havanese x Maltese mix)"
    },
    {
      "name": "Havanestie  (Havanese x West Highland Terrier mix)"
    },
    {
      "name": "Havapeke  (Havanese x Pekingese mix)"
    },
    {
      "name": "Havashire  (Havanese x Yorkshire Terrier mix)"
    },
    {
      "name": "Havashu  (Havanese x Shih Tzu mix)"
    },
    {
      "name": "Havaton  (Coton de Tulear x Havanese mix)"
    },
    {
      "name": "Heeler Pei  (Australian Cattle Dog x Chinese SharPei mix)"
    },
    {
      "name": "Highland Maltie  (West Highland White Terrier (Westie) x Maltese mix)"
    },
    {
      "name": "Hovie Gold Retriever  (Hovawart x Golden Retriever mix)"
    },
    {
      "name": "Hug  (Siberian Husky x Pug mix)"
    },
    {
      "name": "Hush Basset  (Basset Hound x Cocker Spaniel mix)"
    },
    {
      "name": "Husker  (Boxer x Siberian Husky mix)"
    },
    {
      "name": "Huskimo  (Siberian Husky x American Eskimo mix)"
    },
    {
      "name": "Huskita  (Siberian Husky x Akita mix)"
    },
    {
      "name": "Husky Jack  (Siberian Husky x Jack Russell Terrier mix)"
    },
    {
      "name": "Husky Wheaten  (Siberian Husky x Soft Coated Wheaten Terrier mix)"
    },
    {
      "name": "ImoInu  (American Eskimo x Shiba Inu mix)"
    },
    {
      "name": "Irish Afghan Setter  (Irish Setter x Afghan Hound mix)"
    },
    {
      "name": "Irish Bostetter  (Irish Setter x Boston Terrier mix)"
    },
    {
      "name": "Irish Boston Terrier  (Irish Terrier x Boston Terrier mix)"
    },
    {
      "name": "Irish Dane  (Irish Wolfhound x Great Dane mix)"
    },
    {
      "name": "Irish Dobe Setter  (Irish Setter x Doberman Pinscher mix)"
    },
    {
      "name": "Irish Doodle  (Irish Setter x Poodle mix)"
    },
    {
      "name": "Irish Jack Terrier  (Irish Terrier x Jack Russell Terrier mix)"
    },
    {
      "name": "Irish Lakeland Terrier  (Irish Terrier x Lakeland Terrier mix)"
    },
    {
      "name": "Irish Mastiff  (Irish Wolfhound x Mastiff mix)"
    },
    {
      "name": "Irish Russian Spanterrier  (Irish Water Spaniel x Black Russian Terrier mix)"
    },
    {
      "name": "Irish Troodle  (Irish Terrier x Poodle mix)"
    },
    {
      "name": "Irish Wolf Greyhound  (Irish Wolfhound x Greyhound mix)"
    },
    {
      "name": "Irish Wolfoodle  (Irish Wolfhound x Poodle mix)"
    },
    {
      "name": "Irish Wolf Schnauzer  (Giant Schnauzer x Irish Wolfhound mix)"
    },
    {
      "name": "Irish Wolfsky  (Irish Wolfhound x Siberian Husky mix)"
    },
    {
      "name": "Italian Greycrested  (Italian Greyhound x Chinese Crested mix)"
    },
    {
      "name": "Italian Greyenji  (Italian Greyhound x Basenji mix)"
    },
    {
      "name": "ItalianBichon  (Bichon Frise x Italian Greyhound mix)"
    },
    {
      "name": "Italian Border Greyollie  (Border Collie x Italian Greyhound mix)"
    },
    {
      "name": "Italian Bulldogge  (Neapolitan Mastiff x Olde English Bulldogge mix)"
    },
    {
      "name": "Italian Cairn  (Cairn Terrier x Italian Greyhound mix)"
    },
    {
      "name": "Italian Cavalier Greyhound  (Italian Greyhound x Cavalier King Charles Spaniel mix)"
    },
    {
      "name": "Italian Daniff  (Cane Corso Italiano x Great Dane mix)"
    },
    {
      "name": "Italian Doxie  (Italian Greyhound x Dachshund mix)"
    },
    {
      "name": "Italian Eskimo  (Italian Greyhound x American Eskimo Dog mix)"
    },
    {
      "name": "Italian Greagle  (Italian Greyhound x Beagle mix)"
    },
    {
      "name": "Italian Grey Min Pin  (Italian Greyhound x Miniature Pinscher mix)"
    },
    {
      "name": "Italian Greyhuahua  (Chihuahua x Italian Greyhound mix)"
    },
    {
      "name": "Italian Mastweiler  (Italian Mastiff x Rottweiler mix)"
    },
    {
      "name": "Italian Papihound  (Italian Greyhound x Papillon mix)"
    },
    {
      "name": "Irish Saint Terrier  (Irish Terrier x Saint Bernard mix)"
    },
    {
      "name": "Italian Tzu  (Italian Greyhound x Shih Tzu mix)"
    },
    {
      "name": "Italian Whippet Greyhound  (Whippet x Italian Greyhound mix)"
    },
    {
      "name": "JaChon  (Bichon Frise x Japanese Chin mix)"
    },
    {
      "name": "Jacairn  (Cairn Terrier x Jack Russell Terrier mix)"
    },
    {
      "name": "JackABee  (Beagle x Jack Russell Terrier mix)"
    },
    {
      "name": "JackAPoo  (Jack Russell Terrier x Poodle mix)"
    },
    {
      "name": "JackARanian  (Jack Russell Terrier x Pomeranian mix)"
    },
    {
      "name": "Jack Chi  (Chihuahua x Jack Russell Terrier mix)"
    },
    {
      "name": "Jack Highland Terrier  (Jack Russell Terrier x West Highland White Terrier mix)"
    },
    {
      "name": "Jack Pit = (Jack Russell Terrier x Pit Bull Terrier mix)"
    },
    {
      "name": "JackRat Terrier  (Jack Russell Terrier x Rat Terrier mix)"
    },
    {
      "name": "Jack Russell Greyhound  (Jack Russell Terrier x Greyhound mix)"
    },
    {
      "name": "Jack Tzu  (Jack Russell Terrier x Shih Tzu mix)"
    },
    {
      "name": "JackieBichon  (Bichon Frise x Jack Russell Terrier mix)"
    },
    {
      "name": "Jackshund  (Jack Russell Terrier x Dachshund mix)"
    },
    {
      "name": "Jackweiler  (Jack Russell Terrier x Rottweiler mix)"
    },
    {
      "name": "Jafox  (Japanese Chin x Toy Fox Terrier mix)"
    },
    {
      "name": "Jaland  (Japanese Chin x West Highland White Terrier mix)"
    },
    {
      "name": "Japanese Chow Spitz  (Japanese Spitz x Chow Chow mix)"
    },
    {
      "name": "Japanese Spitz Chi  (Japanese Spitz x Chihuahua mix)"
    },
    {
      "name": "Japanese Thai Ridgespitz  (Japanese Spitz x Thai Ridgeback mix)"
    },
    {
      "name": "Japeke  (Japanese Chin x Pekinese mix)"
    },
    {
      "name": "Japillon  (Japanese Chin x Papillon mix)"
    },
    {
      "name": "Japug  (Japanese Chin x Pug mix)"
    },
    {
      "name": "Jarkie  (Japanese Chin x Yorkshire Terrier mix)"
    },
    {
      "name": "Jatese  (Japanese Chin x Maltese mix)"
    },
    {
      "name": "Jatzu  (Japanese Chin x Shih Tzu mix)"
    },
    {
      "name": "Jug  (Jack Russell x Pug mix)"
    },
    {
      "name": "Kashon  (Bichon Frise x Cairn Terrier mix)"
    },
    {
      "name": "Kelpie Corgi  (Australian Kelpie x Corgi mix)"
    },
    {
      "name": "Kelpie Heeler  (Australian Kelpie x Australian Cattle Dog mix)"
    },
    {
      "name": "Kelpie Lab  (Australian Kelpie x Labrador Retriever mix)"
    },
    {
      "name": "Kelpie Shepherd  (Australian Kelpie x German Shepherd mix)"
    },
    {
      "name": "Kelpie Staff  (Australian Kelpie x American Staffordshire Terrier mix)"
    },
    {
      "name": "Kerry Blue Schnauzer  (Kerry Blue Terrier x Schnauzer mix)"
    },
    {
      "name": "Kerrblushcnauz  (Kerry Blue Terrier x Miniature Schnauzer mix)"
    },
    {
      "name": "Kerry Wheaten  (Kerry Blue Terrier x SoftCoated Wheaten mix)"
    },
    {
      "name": "Kimola  (American Eskimo x Lhasa Apso mix)"
    },
    {
      "name": "King Cavrin  (Cavalier King Charles x Cairn Terrier mix)"
    },
    {
      "name": "King Charles Yorkie  (Cavalier King Charles Spaniel x Yorkshire Terrier mix)"
    },
    {
      "name": "King Pin  (Cavalier King Charles Spaniel x Miniature Pinscher mix)"
    },
    {
      "name": "King Rat  (Cavalier King Charles x Rat Terrier mix)"
    },
    {
      "name": "King Schnauzer  (Cavalier King Charles Spaniel x Miniature Schnauzer mix)"
    },
    {
      "name": "King Wheaten  (Cavalier King Charles Spaniel x Soft Coated Wheaten Terrier mix)"
    },
    {
      "name": "Kobetan  (Cocker Spaniel x Tibetan Terrier mix)"
    },
    {
      "name": "Lab'Aire  (Airedale Terrier x Labrador Retriever mix)"
    },
    {
      "name": "Lab Apso  (Labrador Retriever x Lhasa Apso mix)"
    },
    {
      "name": "Lab Pei  (Labrador Retriever x Shar Pei mix)"
    },
    {
      "name": "LabPointer  (Labrador Retriever x Pointer mix)"
    },
    {
      "name": "Labahoula  (Labrador Retriever x Louisiana Catahoula Leopard Dog mix)"
    },
    {
      "name": "Labany  (Labrador Retriever x Brittany Spaniel mix)"
    },
    {
      "name": "Labbe  (Beagle x Labrador Retriever mix)"
    },
    {
      "name": "Labernard  (Labrador Retriever x Saint Bernard mix)"
    },
    {
      "name": "Labernese  (Labrador x Bernese Mountain Dog mix)"
    },
    {
      "name": "Labloodhound  (Bloodhound x Labrador Retriever mix)"
    },
    {
      "name": "Labmaraner  (Labrador Retriever x Weimaraner mix)"
    },
    {
      "name": "Labollie  (Labrador Retriever x Collie mix)"
    },
    {
      "name": "Labrabull  (Labrador Retriever x American Pit Bull Terrier mix)"
    },
    {
      "name": "Labradane  (Labrador Retriever x Great Dane mix)"
    },
    {
      "name": "Labradinger  (English Springer Spaniel x Lab mix)"
    },
    {
      "name": "Labradoodle  (Labrador Retriever x Poodle mix)"
    },
    {
      "name": "Labradoodle Miniature  (Labrador Retriever x Toy or Miniature Poodle mix)"
    },
    {
      "name": "Labrador Corso  (Labrador Retriever x Cane Corso Italiano mix)"
    },
    {},
    {
      "name": "Labraheeler  (Labrador Retriever x Australian Cattle Dog mix)"
    },
    {
      "name": "Labrahuahua  (Labrador Retriever x Chihuahua mix)"
    },
    {
      "name": "Labrakita  (Labrador Retriever x Akita mix)"
    },
    {
      "name": "Labralas  (Labrador Retriever x Vizsla mix)"
    },
    {
      "name": "Labrasenji  (Labrador Retriever x Basenji mix)"
    },
    {
      "name": "Labrastaff  (Labrador Retriever x American Staffordshire Terrier mix)"
    },
    {
      "name": "Labrottie  (Labrador Retriever x Rottweiler mix)"
    },
    {
      "name": "LaChon  (Bichon Frise x Lhasa Apso mix)"
    },
    {
      "name": "Lacasapoo  (CockAPoo x Lhasa Apso mix)"
    },
    {
      "name": "La Pom (Pomeranian x Lhasa Apso mix)"
    },
    {
      "name": "LeoBerner  (Leonberger x Bernese Mountain Dog mix)"
    },
    {
      "name": "LhaBasset  (Basset Hound x Lhasa Apso mix)"
    },
    {
      "name": "LhaCocker  (Cocker Spaniel x Lhasa Apso mix)"
    },
    {
      "name": "LhasaCorgi  (Corgi x Lhasa Apso mix)"
    },
    {
      "name": "LhasaCoton  (Coton de Tulear x Lhasa Apso mix)"
    },
    {
      "name": "Lhasa Jack  (Lhasa Apso x Jack Russell Terrier mix)"
    },
    {
      "name": "Lhasa Pin  (Lhasa Apso x Miniature Pinscher mix)"
    },
    {
      "name": "Lhasa Vendeen  (Lhasa Apso x Petit Basset Griffon Vendeen mix)"
    },
    {
      "name": "Lhaffon  (Brussels Griffon x Lhasa Apso mix)"
    },
    {
      "name": "Lhasalier  (Cavalier King Charles x Lhasa Apso mix)"
    },
    {
      "name": "Lhasanese  (Lhasa Apso x Pekingese mix)"
    },
    {
      "name": "Lhasapoo  (Lhasa Apso x Poodle mix)"
    },
    {
      "name": "Lhatese  (Lhasa Apso x Maltese mix)"
    },
    {
      "name": "Malamute Pei  (Alaskan Malamute x Shar Pei mix)"
    },
    {
      "name": "MalShi  (Maltese x Shih Tzu mix)"
    },
    {
      "name": "Malanees  (Alaskan Malamute x Great Pyrenees mix)"
    },
    {
      "name": "Malchi  (Chihuahua x Maltese mix)"
    },
    {
      "name": "Malidutchie  (Belgian Malinois x Dutch Shepherd mix)"
    },
    {
      "name": "Malinois Akita  (Belgian Malinois x Akita mix)"
    },
    {
      "name": "Malinois Greyhound  (Belgian Malinois x Greyhound mix)"
    },
    {
      "name": "Malinois Mastiff  (Belgian Malinois x Mastiff mix)"
    },
    {
      "name": "Malinois X  (Belgian Malinois x German Shepherd Dog mix)"
    },
    {
      "name": "Mally Foxhound  (Alaskan Malamute x Foxhound mix)"
    },
    {
      "name": "Malteagle  (Beagle x Maltese mix)"
    },
    {
      "name": "MaltiPin  (Maltese x Miniature Pinscher mix)"
    },
    {
      "name": "MaltiPoo  (Maltese x Poodle mix)"
    },
    {
      "name": "MaltiPug  (Maltese x Pug mix)"
    },
    {
      "name": "MaltiPy  (Maltese x Great Pyrenees mix)"
    },
    {
      "name": "Maltichon  (Maltese x Bichon mix)"
    },
    {
      "name": "Maltipom  (Maltese x Pomeranian mix)"
    },
    {
      "name": "Malton  (Cavachon x Maltese mix)"
    },
    {
      "name": "Maremma Kelpie  (Maremma Sheepdog x Australian Kelpie mix)"
    },
    {
      "name": "Maremma Shepherd  (Maremma Sheepdog x German Shepherd mix)"
    },
    {
      "name": "Maspyr  (Mastiff x Great Pyrenees mix)"
    },
    {
      "name": "Mastador  (Mastiff x Labrador Retriever mix)"
    },
    {
      "name": "Mastapeake  (Mastiff x Chesapeake Bay Retriever mix)"
    },
    {
      "name": "MastiBull  (Mastiff x Bulldog mix)"
    },
    {
      "name": "Mastidoodle  (Mastiff x Poodle mix)"
    },
    {
      "name": "Mastiff Shepherd  (Mastiff x German Shepherd mix)"
    },
    {
      "name": "Mauxie  (Dachshund x Maltese mix)"
    },
    {
      "name": "Mauzer  (Maltese x Miniature Schnauzer mix)"
    },
    {
      "name": "Meagle  (Beagle x Miniature Pinscher mix)"
    },
    {
      "name": "Mikitese  (Maltese x MiKi mix)"
    },
    {
      "name": "Miorkie  (MiKi x Yorkshire Terrier mix)"
    },
    {
      "name": "Min Pin Frise  (Bichon Frise x Miniature Pinscher mix)"
    },
    {
      "name": "Min Pin Shepherd  (Miniature Pinscher x German Shepherd mix)"
    },
    {
      "name": "Mini Australian Shepterrier  (Australian Terrier x Miniature Australian Shepherd mix)"
    },
    {
      "name": "Mini Bolonauzer  (Bolognese x Miniature Schnauzer mix)"
    },
    {
      "name": "Mini Cairn Pin  (Cairn Terrier x Miniature Pinscher mix)"
    },
    {
      "name": "Mini Chisoxy  (Mini Fox Terrier x Chihuahua mix)"
    },
    {
      "name": "Mini English Cocker  (Dachshund x English Cocker Spaniel mix)"
    },
    {},
    {
      "name": "Mini FoChon  (Bichon Frise x Mini Fox Terrier mix)"
    },
    {
      "name": "Mini FoTzu  (Shih Tzu x Mini Fox Terrier mix)"
    },
    {
      "name": "Mini Foodle  (Poodle x Mini Fox Terrier mix)"
    },
    {
      "name": "Mini Fox Beagle  (Mini Fox Terrier x Beagle mix)"
    },
    {
      "name": "Mini Fox Pinscher  (Miniature Pinscher x Mini Fox Terrier mix)"
    },
    {
      "name": "Mini Foxie Doxie  (Mini Fox Terrier x Dachshund mix)"
    },
    {
      "name": "Mini Foxillon  (Miniature Fox Terrier x Papillon mix)"
    },
    {
      "name": "Mini Foxingese  (Pekingese x Mini Fox Terrier mix)"
    },
    {
      "name": "Mini Foxker  (Cocker Spaniel x Mini Fox Terrier mix)"
    },
    {
      "name": "Mini Foxton  (Boston Terrier x Mini Fox Terrier mix)"
    },
    {
      "name": "Mini Foxy Rat Terrier  (American Rat Terrier x Mini Fox Terrier mix)"
    },
    {
      "name": "Mini Foxy Russell  (Jack Russell Terrier x Mini Fox Terrier mix)"
    },
    {
      "name": "Mini Jafox  (Japanese Chin x Mini Fox Terrier mix)"
    },
    {
      "name": "Mini Kerry Blue Schnauzer  (Kerry Blue Terrier x Miniature Schnauzer mix)"
    },
    {
      "name": "Mini King Schnauzer  (Cavalier King Charles Spaniel x Miniature Schnauzer mix)"
    },
    {
      "name": "Mini Poxer  (Pug x Mini Fox Terrier mix)"
    },
    {
      "name": "Mini Ratzer  (Miniature Schnauzer x Rat Terrier mix)"
    },
    {
      "name": "Mini Schnauzer Chin  (Japanese Chin x Miniature Schnauzer mix)"
    },
    {
      "name": "Mini Schnauzer Jack  (Miniature Schnauzer x Jack Russell Terrier mix)"
    },
    {
      "name": "Mini Scottish Fox Terrier  (Scottish Terrier x Mini Fox Terrier mix)"
    },
    {
      "name": "Mini St. Bernard  (Saint Bernard x Cocker Spaniel mix)"
    },
    {
      "name": "Mini Texas Heeler  (Miniature Australian Shepherd x Australian Cattle Dog mix)"
    },
    {
      "name": "Mini Torkie  (Mini Fox Terrier x Yorkie mix)"
    },
    {
      "name": "Mini Toy Foxter  (Mini Fox Terrier x Toy Fox Terrier mix)"
    },
    {
      "name": "Mini Wire Hair Snauzer  (Miniature Schnauzer x Wire Fox Terrier mix)"
    },
    {
      "name": "Mini Yorkshire Aussie  (Miniature Australian Shepherd x Yorkshire Terrier mix)"
    },
    {
      "name": "Miniature Ausseippet  (Whippet x Miniature Australian Shepherd mix)"
    },
    {
      "name": "Miniature Aussiedoodle  (Miniature Australian Shepherd x Miniature Poodle mix)"
    },
    {
      "name": "Miniature Border Schnollie  (Border Collie x Miniature Schnauzer mix)"
    },
    {
      "name": "Miniature Boxer  (Boston Terrier x Boxer mix)"
    },
    {
      "name": "Miniature Bulldog  (Bulldog x Pug mix)"
    },
    {
      "name": "Miniature English Bulldach  (Bulldog x Dachshund mix)"
    },
    {
      "name": "Miniature French Bull Terrier  (French Bulldog x Miniature Bull Terrier mix)"
    },
    {
      "name": "Miniature French Schnauzer  (French Bulldog x Miniature Schnauzer mix)"
    },
    {
      "name": "Miniature Golden Retriever  (Golden Retriever x Cocker Spaniel x Poodle mix)"
    },
    {
      "name": "Miniature Goldendoodle  (Golden Retriever x Toy or Miniature Poodle mix)"
    },
    {
      "name": "Miniature Gordondoodle  (Gordon Setter x Miniature Poodle mix)"
    },
    {
      "name": "Miniature Irish Wolf Schnauzer  (Miniature Schnauzer x Irish Wolfhound mix)"
    },
    {
      "name": "Miniature Labradoodle  (Labrador Retriever x Toy or Miniature Poodle mix)"
    },
    {
      "name": "Miniature Pinschelkhound  (Miniature Pinscher x Norwegian Elkhound mix)"
    },
    {
      "name": "Miniature Schnaupin  (Miniature Schnauzer x Min Pin mix)"
    },
    {
      "name": "Miniature Schnauzzie  (Miniature Schnauzer x Miniature Australian Shepherd mix)"
    },
    {
      "name": "Miniature Schnoxie  (Dachshund x Miniature Schnauzer mix)"
    },
    {
      "name": "Miniboz  (Boston Terrier x Miniature Schnauzer mix)"
    },
    {
      "name": "MiniCoonhound  (Exact mix in this type of dog has not be disclosed)"
    },
    {
      "name": "Minnie Jack  (Jack Russell Terrier x Miniature Pinscher mix)"
    },
    {
      "name": "Minnie Parson  (Parson Russell Terrier x Miniature Pinscher mix)"
    },
    {
      "name": "Morkie  (Maltese x Yorkshire Terrier mix)"
    },
    {
      "name": "Morkshire Terrier  (Maltese x Biewer Terrier mix)"
    },
    {
      "name": "Mountain Bulldog  (Bernese Mountain Dog x Bulldog mix)"
    },
    {
      "name": "Mountain Cur Shepherd  (Mountain Cur x German Shepherd mix)"
    },
    {
      "name": "Mountain Jack Cur  (Mountain Cur x Jack Russell Terrier mix)"
    },
    {
      "name": "Mountain Mastiff  (Bernese Mountain Dog x Mastiff mix)"
    },
    {
      "name": "Muggin  (Miniature Pinscher x Pug mix)"
    },
    {
      "name": "Muscle Mastiff  (Dogue de Bordeaux x Mastiff mix)"
    },
    {
      "name": "Native American Newfie  (Native American Indian Dog x Newfoundland mix)"
    },
    {
      "name": "Native American Shepherd  (Native American Indian Dog x Belgium Shepherd mix)"
    },
    {
      "name": "Native American Village Dog  (Native American Indian Dog x German Shepherd mix)"
    },
    {
      "name": "Neahond  (Neapolitan Mastiff x Keeshond mix)"
    },
    {
      "name": "Neapolitan Shepherd  (Neapolitan Mastiff x German Shepherd mix)"
    },
    {
      "name": "Neapolitan Boxer  (Neapolitan Mastiff x Boxer mix)"
    },
    {
      "name": "Nekita  (Akita x Neapolitan Mastiff mix)"
    },
    {
      "name": "Neo Bullmastiff  (Bullmastiff x Neapolitan Mastiff mix)"
    },
    {
      "name": "Neo Daniff  (Neapolitan Mastiff x Great Dane mix)"
    },
    {
      "name": "New Labralound  (Newfoundland x Labrador Retriever mix)"
    },
    {
      "name": "New Rottland  (Newfoundland x Rottweiler mix)"
    },
    {
      "name": "New Shep  (Newfoundland x German Shepherd Dog mix)"
    },
    {
      "name": "Newfie Dane  (Newfoundland x Great Dane mix)"
    },
    {
      "name": "Newfypoo  (Newfoundland x Poodle mix)"
    },
    {
      "name": "Norjack  (Norfolk Terrier x Jack Russell Terrier mix)"
    },
    {
      "name": "Nortese  (Norwich Terrier x Maltese x mix)"
    },
    {
      "name": "Norwich de Tulear  (Coton de Tulear x Norwich Terrier mix)"
    },
    {
      "name": "Old Anglican Bulldogge  (American Pit Bull Terrier or American Staffordshire Terrier x Bulldog mix)"
    },
    {
      "name": "Old Deerhound Sheepdog  (Old English Sheepdog x Scottish Deerhound mix)"
    },
    {
      "name": "Old Doxie Sheepdog  (Dachshund x Old English Sheepdog mix)"
    },
    {
      "name": "Olde Boston Bullchi  (Olde Boston Bulldogge x Chihuahua mix)"
    },
    {
      "name": "Olde Double Bully  (Bulldog x Olde English Bulldogge mix)"
    },
    {
      "name": "Olde Pit Bulldogge  (American Pit Bull Terrier x Olde English Bulldogge mix)"
    },
    {
      "name": "Olde Staff Bulldogge  (American Staffordshire Terrier x Olde English Bulldogge mix)"
    },
    {
      "name": "Olde Staffybull Bulldogge  (Staffordshire Bull Terrier x Olde English Bulldogge mix)"
    },
    {
      "name": "Ori Pei  (Pug x SharPei mix)"
    },
    {
      "name": "Papastzu  (Papillon x Shih Tzu mix)"
    },
    {
      "name": "Papeagle  (Papillon x Beagle mix)"
    },
    {
      "name": "Paperanian  (Papillon x Pomeranian mix)"
    },
    {
      "name": "PapiInu  (Papillon x Shiba Inu mix)"
    },
    {
      "name": "Papipoo  (Papillon x Poodle mix)"
    },
    {
      "name": "Papichon  (Papillon x Bichon mix)"
    },
    {
      "name": "Papigriffon  (Brussels Griffon x Papillon mix)"
    },
    {
      "name": "Papijack  (Papillon x Jack Russell Terrier mix)"
    },
    {
      "name": "Papimo  (American Eskimo x Papillon mix)"
    },
    {
      "name": "Papiox  (Papillon x Toy Fox Terrier mix)"
    },
    {
      "name": "Papitese  (Maltese x Papillon mix)"
    },
    {
      "name": "Papshund  (Dachshund x Papillon mix)"
    },
    {
      "name": "Parsonhund  (Parson Russell Terrier x Dachshund mix)"
    },
    {
      "name": "Patterdale Doxie  (Patterdale Terrier x Dachshund mix)"
    },
    {
      "name": "Patterdale Shepherd  (Patterdale Terrier x German Shepherd mix)"
    },
    {},
    {
      "name": "Patterbea  (Beagle x Patterdale Terrier mix)"
    },
    {
      "name": "Patterjack  (Patterdale Terrier x Jack Russell mix)"
    },
    {
      "name": "Patterland  (Patterdale Terrier x Lakeland Terrier mix)"
    },
    {
      "name": "Patton Terrier  (Patterdale Terrier x Boston Terrier mix)"
    },
    {
      "name": "Peagle  (Beagle x Pekingese mix)"
    },
    {
      "name": "PeekAPom  (Pekingese x Pomeranian mix)"
    },
    {
      "name": "PekARat  (Pekingese x Rat Terrier mix)"
    },
    {
      "name": "Pekalier  (Cavalier King Charles x Pekingese mix)"
    },
    {
      "name": "Pekarin  (Cairn Terrier x Pekingese mix)"
    },
    {
      "name": "PekeABoo  (Bolognese x Pekingese mix)"
    },
    {
      "name": "PekeAChon  (Bichon Frise x Pekingese mix)"
    },
    {
      "name": "PekeAChow  (Pekingese x Chow Chow mix)"
    },
    {
      "name": "PekeAJack  (Pekingese x Jack Russell Terrier mix)"
    },
    {
      "name": "PekeAPap  (Papillon x Pekingese mix)"
    },
    {
      "name": "PekeAPin  (Miniature Pinscher x Pekingese mix)"
    },
    {
      "name": "PekeATese  (Maltese x Pekingese mix)"
    },
    {
      "name": "PekaAWest  (Pekingnese x West Highland White Terrier mix)"
    },
    {
      "name": "PekeItalian  (Pekingnese x Italian Greyhound mix)"
    },
    {
      "name": "Pekehund  (Pekingese x Dachshund mix)"
    },
    {
      "name": "Pekepoo  (Pekingese x Poodle mix)"
    },
    {
      "name": "Pembroke Cocker Corgi  (Pembroke Welsh Corgi x American Cocker Spaniel mix)"
    },
    {
      "name": "Pembroke Corgi Pointer  (Pembroke Welsh Corgi x Pointer mix)"
    },
    {
      "name": "Pembroke Corman Shepherd  (Pembroke Welsh Corgi x German Shepherd mix)"
    },
    {
      "name": "Pembroke Corswiss  (Pembroke Welsh Corgi x Greater Swiss Mountain Dog mix)"
    },
    {
      "name": "Pembroke Sheltie  (Shetland Sheepdog x Pembroke Welsh Corgi mix)"
    },
    {
      "name": "Petite Goldendoodle  (Golden Retriever x Cocker Spaniel x Poodle mix)"
    },
    {
      "name": "Petite Golden Retriever  (Cavalier King Charles Spaniel with x Golden Retriever mix)"
    },
    {
      "name": "Petite Labradoodle  (Labrador Retriever x Cocker Spaniel x Poodle mix)"
    },
    {
      "name": "Pharaoh Lab  (Pharaoh Hound x Labrador Retriever mix)"
    },
    {
      "name": "Plica  (Basset Hound x Ori Pei mix)"
    },
    {
      "name": "Plotkita  (Plott Hound x Akita mix)"
    },
    {
      "name": "Plottahoula  (Plott Hound x Louisiana Catahoula Leopard Dog mix)"
    },
    {
      "name": "Plott Rottie  (Plott Hound x Rottweiler mix)"
    },
    {
      "name": "Plott Walker  (Plott Hound x Treeing Walker Coonhound mix)"
    },
    {
      "name": "Plush Danois  (Anatolian Shepherd Dog x Great Dane mix)"
    },
    {
      "name": "PinTzu  (Miniature Pinscher x Shih Tzu mix)"
    },
    {
      "name": "Pineranian  (Miniature Pinscher x Pomeranian mix)"
    },
    {
      "name": "PinnyPoo  (Miniature Pinscher x Poodle mix)"
    },
    {
      "name": "Pinweiler  (Miniature Pinscher x Rottweiler mix)"
    },
    {
      "name": "Pit Boodle  (Pit Bull x Poodle mix)"
    },
    {
      "name": "Pit Bullmastiff  (American Pit Bull Terrier x Bullmastiff mix)"
    },
    {
      "name": "Pit Heeler  (American Pitbull Terrier x Blue Heeler mix)"
    },
    {
      "name": "Pit Pei  (American Pit Bull Terrier x SharPei mix)"
    },
    {
      "name": "Pit Pin  (American Pit Bull Terrier x Miniature Pinscher mix)"
    },
    {
      "name": "Pitchow  (American Pitbull Terrier x Chow Chow mix)"
    },
    {
      "name": "Pitsky  (American Pitbull Terrier x Siberian Husky or Alaskan Husky mix)"
    },
    {
      "name": "Pitweiler  (American Pit Bull Terrier x Rottweiler mix)"
    },
    {
      "name": "Pocket Pitbull  (American Pit Bull Terrier x Patterdale Terrier mix)"
    },
    {
      "name": "Pointer Bay  (German Shorthaired Pointer x Chesapeake Bay Retriever mix)"
    },
    {
      "name": "Pointer Pit  (American Pit Bull Terrier x Pointer mix)"
    },
    {},
    {
      "name": "Pointollie  (Pointer x Collie mix)"
    },
    {
      "name": "PomKee  (Pomeranian x Keeshond mix)"
    },
    {
      "name": "PomANauze  (Miniature Schnauzer x Pomeranian mix)"
    },
    {
      "name": "PomAPug  (Pomeranian x Pug mix)"
    },
    {
      "name": "PomCoton  (Coton De Tulear x Pomeranian mix)"
    },
    {
      "name": "PomShi  (Pomeranian x Shiba Inu mix)"
    },
    {
      "name": "PomSilk  (Pomeranian x Silky Terrier mix)"
    },
    {
      "name": "Pom Terrier  (Pomeranian x Toy Fox Terrier mix)"
    },
    {
      "name": "Pomapoo  (Pomeranian x Poodle mix)"
    },
    {
      "name": "Pomchi  (Pomeranian x Chihuahua mix)"
    },
    {
      "name": "Pomeagle  (Beagle x Pomeranian mix)"
    },
    {
      "name": "Pomerat  (Pomeranian x American Rat Terrier mix)"
    },
    {
      "name": "Pomimo  (American Eskimo x Pomeranian mix)"
    },
    {
      "name": "Pomsky  (Pomeranian x Husky mix)"
    },
    {
      "name": "Pomston  (Boston Terrier x Pomeranian mix)"
    },
    {
      "name": "PooShi  (Poodle x Shiba Inu mix)"
    },
    {
      "name": "PooTon  (Coton De Tulear x Poodle mix)"
    },
    {
      "name": "Pooahoula  (Catahoula Leopard Dog x Poodle mix)"
    },
    {
      "name": "Poochin  (Japanese Chin x Poodle mix)"
    },
    {
      "name": "Pooda Houla  (Catahoula x Poodle mix)"
    },
    {
      "name": "Poogle  (Beagle x Poodle mix)"
    },
    {
      "name": "Poolky  (Poodle x Silky Terrier mix)"
    },
    {
      "name": "Pootalian  (Italian Greyhound x Poodle mix)"
    },
    {
      "name": "Poovanese  (Havanese x Poodle mix)"
    },
    {
      "name": "Poshies  (Pomeranian x Shetland Sheepdog mix)"
    },
    {
      "name": "Powderpap  (Papillon x Chinese Crested mix)"
    },
    {
      "name": "Presa Bulldog  (English Bulldog x Presa Canario mix)"
    },
    {
      "name": "Presa Dane  (Presa Canario x Great Dane mix)"
    },
    {
      "name": "PugAMo  (Pug x American Eskimo Dog mix)"
    },
    {
      "name": "PugCoton  (Pug x Coton de Tulear mix)"
    },
    {
      "name": "Pug Pit  (Pug x Pit Bull Terrier mix)"
    },
    {
      "name": "Pug Shiba  (Pug x Shiba Inu mix)"
    },
    {
      "name": "PugZu  (Pug x Shih Tzu mix)"
    },
    {
      "name": "Pugador  (Pug x Labrador Retriever mix)"
    },
    {
      "name": "Pugairn  (Pug x Cairn Terrier mix)"
    },
    {
      "name": "Pugalier  (Cavalier King Charles Spaniel x Pug mix)"
    },
    {
      "name": "Puganese  (Pug x Havanese mix)"
    },
    {
      "name": "Pugapoo  (Pug x Poodle mix)"
    },
    {
      "name": "Pugese  (Pug x Chinese Crested mix)"
    },
    {
      "name": "Puggat  (Pug x American Rat Terrier mix)"
    },
    {
      "name": "Puggit  (Pug x Italian Greyhound mix)"
    },
    {
      "name": "Puggle  (Pug x Beagle mix)"
    },
    {
      "name": "Pughasa  (Pug x Lhasa Apso mix)"
    },
    {
      "name": "Pugillon  (Pug x Papillon mix)"
    },
    {
      "name": "Puginese  (Pug x Pekingese mix)"
    },
    {
      "name": "Pugland  (Pug x Westie mix)"
    },
    {
      "name": "Pugottie  (Pug x Scottish Terrier mix)"
    },
    {
      "name": "Pugmatian  (Pug x Dalmatian mix)"
    },
    {
      "name": "Pugshire  (Pug x Yorkshire Terrier mix)"
    },
    {
      "name": "Pugwich  (Pug x Norwich Terrier mix)"
    },
    {
      "name": "Pushon  (Pug x Bichon Frise mix)"
    },
    {
      "name": "Pyredoodle  (Great Pyrenees x Poodle mix)"
    },
    {
      "name": "Pyrenees Husky  (Great Pyrenees x Siberian Husky mix)"
    },
    {
      "name": "Pyrenees Pit  (Great Pyrenees x American Pit Bull Terrier mix)"
    },
    {
      "name": "Pyrador  (Great Pyrenees x Labrador Retriever mix)"
    },
    {
      "name": "Raggle  (American Rat Terrier x Beagle mix)"
    },
    {
      "name": "Rashon  (Rat Terrier x Bichon Frise mix)"
    },
    {
      "name": "RatAPap  (American Rat Terrier x Papillon mix)"
    },
    {
      "name": "Rat Apso  (Lhasa Apso x Rat Terrier mix)"
    },
    {
      "name": "Rat Basset  (Basset Hound x Rat Terrier mix)"
    },
    {
      "name": "RatCha  (Rat Terrier x Chihuahua mix)"
    },
    {
      "name": "Rat Feist  (Rat Terrier x Mountain Feist mix)"
    },
    {
      "name": "Rat Heeler  (Rat Terrier x Australian Cattle Dog mix)"
    },
    {
      "name": "Rat Pei  (Rat Terrier x Shar Pei mix)"
    },
    {
      "name": "Rat Pinscher  (Rat Terrier x Miniature Pinscher mix)"
    },
    {
      "name": "Ratahoula  (Rat Terrier x Catahoula Leopard Dog mix)"
    },
    {
      "name": "Ratese  (American Rat Terrier x Maltese mix)"
    },
    {
      "name": "Ratshi Terrier  (American Rat Terrier x Shih Tzu mix)"
    },
    {
      "name": "Ratshire Terrier  (Yorkshire Terrier x American Rat Terrier mix)"
    },
    {},
    {
      "name": "Rattle  (American Rat Terrier x Poodle mix)"
    },
    {
      "name": "Rattle Griffon  (Brussels Griffon x Rat Terrier mix)"
    },
    {
      "name": "Reagle  (Rottweiler x Beagle mix)"
    },
    {
      "name": "Redbone Coonoodle  (Redbone Coonhound x Poodle mix)"
    },
    {
      "name": "Redbone Lab  (Redbone Coonhound x Labrador Retriever mix)"
    },
    {
      "name": "Redbone Shepherd  (Redbone Coonhound x German Shepherd mix)"
    },
    {
      "name": "Rhodesian Beagle  (Rhodesian Ridgeback x Beagle mix)"
    },
    {
      "name": "Rhodesian Bernard  (Rhodesian Ridgeback x Saint Bernard mix)"
    },
    {
      "name": "Rhodesian Boxer  (Rhodesian Ridgeback x Boxer mix)"
    },
    {
      "name": "Rhodesian Labrador  (Rhodesian Ridgeback x Labrador Retriever mix)"
    },
    {
      "name": "Rhodesian Pit  (Rhodesian Ridgeback x Pit Bull Terrier mix)"
    },
    {
      "name": "Rhodesian Rottie  (Rhodesian Ridgeback x Rottweiler mix)"
    },
    {
      "name": "Rhodesian Shepherd  (Rhodesian Ridgeback x German Shepherd mix)"
    },
    {
      "name": "Rhodesian Whippet  (Rhodesian Ridgeback x Whippet mix)"
    },
    {
      "name": "Rott Pei  (Rottweiler x Shar Pei mix)"
    },
    {
      "name": "Rottaf  (Afghan Hound x Rottweiler mix)"
    },
    {
      "name": "Rottbull  (Rottweiler x Bull Terrier mix)"
    },
    {
      "name": "Rotterman  (Doberman Pinscher x Rottweiler mix)"
    },
    {
      "name": "Rotticorso  (Rottweiler x Cane Corso Italiano mix)"
    },
    {
      "name": "Rottie Basset  (Rottweiler x Basset Hound mix)"
    },
    {
      "name": "Rottie Bordeaux  (Dogue de Bordeaux x Rottweiler mix)"
    },
    {
      "name": "Rottie Chow  (Rottweiler x Chow Chow mix)"
    },
    {
      "name": "Rottie Cocker  (Rottweiler x Cocker Spaniel mix)"
    },
    {
      "name": "Rottie Corgi  (Rottweiler x Corgi mix)"
    },
    {
      "name": "Rottie Heeler  (Rottweiler x Australian Cattle Dog mix)"
    },
    {
      "name": "Rottie Shepherd  (Rottweiler x German Shepherd mix)"
    },
    {
      "name": "Rottle  (Rottweiler x Poodle mix)"
    },
    {
      "name": "Rottmatian  (Rottweiler x Dalmatian mix)"
    },
    {
      "name": "Rottpeake  (Rottweiler x Chesapeake Bay Retriever mix)"
    },
    {
      "name": "Rottsky  (Rottweiler x Siberian Husky mix)"
    },
    {
      "name": "Rough Rhodesian Collie  (Rough Collie x Rhodesian Ridgeback mix)"
    },
    {
      "name": "RusAPei  (Jack Russell Terrier x Chinese Shar Pei mix)"
    },
    {
      "name": "Russian Doodle Terrier  (Black Russian Terrier x Poodle mix)"
    },
    {
      "name": "Rustralian Terrier  (Australian Terrier x Jack Russell Terrier mix)"
    },
    {
      "name": "Saint Bernese  (Saint Bernard x Bernese Mountain Dog mix)"
    },
    {
      "name": "Saint Berdoodle  (Saint Bernard x Poodle mix)"
    },
    {
      "name": "Saint Bermastiff  (Mastiff x Saint Bernard mix)"
    },
    {
      "name": "Saint Bernewfie  (Saint Bernard x Newfoundland mix)"
    },
    {
      "name": "Saint Berxer  (Saint Bernard x Boxer mix)"
    },
    {
      "name": "Saint Chesa Bay Bernard  (Saint Bernard x Chesapeake Bay Retriever mix)"
    },
    {
      "name": "Saint Dane  (Great Dane x Saint Bernard mix)"
    },
    {
      "name": "Saint Pyrenees  (Saint Bernard x Great Pyrenees mix)"
    },
    {
      "name": "Saint Shepherd  (Saint Bernard x German Shepherd mix)"
    },
    {
      "name": "Saluki Greyhound  (Saluki x Greyhound mix)"
    },
    {
      "name": "Saluki Deerhound  (Saluki x Scottish Deerhound mix)"
    },
    {
      "name": "Saluki Sloughi  (Saluki x Sloughi mix)"
    },
    {
      "name": "Sammy Chow  (Samoyed x Chow Chow mix)"
    },
    {
      "name": "Sammy Shepherd  (Samoyed x German Shepherd mix)"
    },
    {
      "name": "Sammypoo  (Samoyed x Poodle mix)"
    },
    {
      "name": "Samollie  (Samoyed x Collie mix)"
    },
    {
      "name": "Samusky  (Samoyed x Husky mix)"
    },
    {
      "name": "Sceagle  (Beagle x Scottish Terrier mix)"
    },
    {
      "name": "Schapso  (Lhasa Apso x Miniature Schnauzer mix)"
    },
    {
      "name": "SchipAPom  (Pomeranian x Schipperke mix)"
    },
    {
      "name": "Schip Coton  (Schipperke x Coton de Tulear mix)"
    },
    {
      "name": "Schipese  (Maltese x Schipperke mix)"
    },
    {
      "name": "SchipperChi  (Schipperke x Chihuahua mix)"
    },
    {
      "name": "Schipper Geraussie Shepherd  (Schipperke x German Shepherd x Australian Shepherd mix)"
    },
    {
      "name": "SchipperPin  (Schipperke x Miniature Pinscher mix)"
    },
    {
      "name": "SchipperPoo  (Poodle x Schipperke mix)"
    },
    {
      "name": "Schnairedale  (Airedale Terrier x Schnauzer mix)"
    },
    {
      "name": "SchnauTzu  (Miniature Schnauzer x Shih Tzu mix)"
    },
    {
      "name": "Schnauffen  (Schnauzer x Affenpinscher mix)"
    },
    {
      "name": "Schnauzador = (Schnauzer x Labrador Retriever mix)"
    },
    {
      "name": "Schnauzer Pit = (Schnauzer x Pit Bull mix)"
    },
    {
      "name": "Schneagle  (Beagle x Schnauzer mix)"
    },
    {
      "name": "Schnekingese  (Miniature Schnauzer x Pekingese mix)"
    },
    {
      "name": "Schnese  (Havanese x Miniature Schnauzer mix)"
    },
    {
      "name": "Schnocker  (Miniature Schnauzer x Cocker Spaniel mix)"
    },
    {
      "name": "Schnoodle  (Schnauzer x Poodle mix)"
    },
    {
      "name": "Schnorgi  (Schnauzer x Corgi mix)"
    },
    {
      "name": "Schnottie  (Schnauzer x Rottweiler mix)"
    },
    {
      "name": "Schnu  (Miniature Schnauzer x Shiba Inu mix)"
    },
    {
      "name": "Schnug  (Miniature Schnauzer x Pug mix)"
    },
    {
      "name": "Schweenie  (Dachshund x Shih Tzu mix)"
    },
    {
      "name": "ScoShi  (Scottish Terrier x Shih Tzu mix)"
    },
    {
      "name": "Scobo Terrier  (Boston Terrier x Scottish Terrier mix)"
    },
    {
      "name": "Scoland Terrier  (Scottish Terrier x Westie mix)"
    },
    {
      "name": "Scolden Terrier  (Scottish Terrier x Golden Retriever mix)"
    },
    {
      "name": "Scorkie  (Scottish Terrier x Yorkshire Terrier mix)"
    },
    {
      "name": "Scotchi  (Scottish Terrier x Chihuahua mix)"
    },
    {
      "name": "Scotchon  (Bichon Frise x Scottish Terrier mix)"
    },
    {
      "name": "Scotinese  (Pekingese x Scottish Terrier mix)"
    },
    {
      "name": "Scottese  (Maltese x Scottish Terrier mix)"
    },
    {
      "name": "Scotti Apso  (Lhasa Apso x Scottish Terrier mix)"
    },
    {
      "name": "Scottie Schnauzer  (Scottish Terrier x Schnauzer)"
    },
    {
      "name": "Scottish Cocker  (Cocker Spaniel x Scottish Terrier mix)"
    },
    {
      "name": "Scottish Deer Greyhound  (Greyhound x Scottish Deerhound mix)"
    },
    {
      "name": "ScottishSkye Terrier  (Scottish Terrier x Skye Terrier mix)"
    },
    {
      "name": "Scottish Staffish Bull Terrier  (Scottish Terrier x Staffordshire Bull Terrier mix)"
    },
    {
      "name": "Scoodle  (Scottish Terrier x Poodle mix)"
    },
    {
      "name": "Sealydale Terrier  (Sealyham Terrier x Airedale Terrier mix)"
    },
    {},
    {
      "name": "ShairnInu  (Cairn Terrier x Shiba Inu mix)"
    },
    {
      "name": "Sharbo  (Boston Terrier x Chinese SharPei mix)"
    },
    {
      "name": "SharPei Pitbull Terrier  (Chinese SharPei x American Pit Bull Terrier mix)"
    },
    {
      "name": "SharPoo  (SharPei x Poodle mix)"
    },
    {
      "name": "Shar Tzu  (SharPei x Shih Tzu mix)"
    },
    {
      "name": "Sharberian Husky  (Chinese Sharpei x Siberian Husky mix)"
    },
    {
      "name": "Sharmatian  (Chinese SharPei x Dalmatian mix)"
    },
    {
      "name": "Sharp Eagle  (Beagle x Chinese Shar Pei mix)"
    },
    {
      "name": "Sheepadoodle  (Old English Sheepdog x Standard Poodle mix)"
    },
    {
      "name": "ShelAussie  (Australian Shepherd or Miniature Australian Shepherd x Shetland Sheepdog mix)"
    },
    {
      "name": "Shelchon  (Bichon Frise x Shetland Sheepdog mix)"
    },
    {
      "name": "Shelestie  (Shetland Sheepdog x West Highland White Terrier mix)"
    },
    {
      "name": "Shelillon  (Papillon x Shetland Sheepdog mix)"
    },
    {
      "name": "Sheltidoodle  (Sheltie x Poodle mix)"
    },
    {
      "name": "Sheltie Heeler  (Shetland Sheepdog x Australian Cattle Dog (Heeler) mix)"
    },
    {
      "name": "Sheltie Inu  (Shetland Sheepdog x Shiba Inu mix)"
    },
    {
      "name": "SheltieKee  (Keeshond x Shetland Sheepdog mix)"
    },
    {
      "name": "Sheltie Pin  (Shetland Sheepdog x Miniature Pinscher mix)"
    },
    {
      "name": "Sheltie Pug  (Shetland Sheepdog x Pug mix)"
    },
    {
      "name": "Sheltie Shepherd  (German Shepherd x Shetland Sheepdog mix)"
    },
    {
      "name": "Sheltie Tzu  (Shetland Sheepdog x Shih Tzu mix)"
    },
    {
      "name": "Shepadoodle  (German Shepherd x Standard Poodle mix)"
    },
    {
      "name": "Shepherd Pei  (German Shepherd x Shar Pei mix)"
    },
    {
      "name": "Shepherd Pit  (German Shepherd x American Pit Bull Terrier mix)"
    },
    {
      "name": "Shepherd Tzu  (German Shepherd x Shih Tzu mix)"
    },
    {
      "name": "Shepnees  (German Shepherd x Great Pyrenees mix)"
    },
    {
      "name": "Sheprador  (Australian Shepherd x Labrador Retriever mix)"
    },
    {
      "name": "Shepsky  (German Shepherd x Siberian Husky mix)"
    },
    {
      "name": "Sheptese  (German Shepherd x Maltese mix)"
    },
    {
      "name": "Shepweiler  (German Shepherd x Rottweiler mix)"
    },
    {
      "name": "Shethund  (Shetland Sheepdog x Dachshund mix)"
    },
    {
      "name": "Shetinese  (Pekingese x Shetland Sheepdog mix)"
    },
    {
      "name": "ShiBeagle  (Beagle x Shiba Inu mix)"
    },
    {
      "name": "ShibaChi  (Chihuahua x Shiba Inu mix)"
    },
    {
      "name": "Shiba Corgi  (Shiba Inu x Welsh Corgi mix)"
    },
    {
      "name": "Shiba Lab  (Shiba Inu x Labrador Retriever mix)"
    },
    {
      "name": "Shiba Pin  (Shiba Inu x Miniature Pinscher mix)"
    },
    {
      "name": "Shibadox  (Shiba Inu x Dachshund mix)"
    },
    {
      "name": "Shibos  (Boston Terrier x Shiba Inu mix)"
    },
    {
      "name": "ShiChi  (Chihuahua x Shih Tzu mix)"
    },
    {
      "name": "Shichon  (Bichon Frise x Shih Tzu mix)"
    },
    {
      "name": "Shiffon  (Brussels Griffon x Shih Tzu mix)"
    },
    {
      "name": "Shih Apso  (Lhasa Apso x Shih Tzu mix)"
    },
    {
      "name": "ShihMo  (American Eskimo x Shih Tzu mix)"
    },
    {
      "name": "ShihPoo  (ShihTzu x Poodle mix)"
    },
    {
      "name": "Shinese  (Shih Tzu x Pekingese mix)"
    },
    {
      "name": "Shiranian  (Pomeranian x Shih Tzu mix)"
    },
    {
      "name": "Shocker  (Cocker Spaniel x Shiba Inu mix)"
    },
    {
      "name": "Shockerd  (English Shepherd x Cocker Spaniel mix)"
    },
    {
      "name": "Shollie  (German Shepherd x Collie mix)"
    },
    {
      "name": "Shorgi  (Corgi x ShihTzu mix)"
    },
    {
      "name": "Shorkie Tzu  (Shih Tzu x Yorkie mix)"
    },
    {
      "name": "Shug  (German Shepherd Dog x Pug mix)"
    },
    {
      "name": "Sibercaan  (Siberian Husky or Native American Indian Dog x Canaan Dog mix)"
    },
    {
      "name": "Siberian Black Mouth Cur  (Black Mouth Cur x Siberian Husky mix) (picture needed)"
    },
    {
      "name": "Siberian Boston  (Siberian Husky x Boston Terrier mix)"
    },
    {
      "name": "Siberian Cocker  (Cocker Spaniel x Siberian Husky mix)"
    },
    {
      "name": "Siberian Collisky  (Siberian Husky x Collie mix)"
    },
    {
      "name": "Siberian Indian Dog  (Siberian Husky x Native American Indian Dog mix)"
    },
    {
      "name": "Siberian Keeshond  (Siberian Husky x Keeshond mix)"
    },
    {
      "name": "Siberian Kelpsky  (Siberian Husky x Australian Kelpie mix)"
    },
    {
      "name": "Siberian Pinscher  (Doberman Pinscher x Siberian Husky mix)"
    },
    {
      "name": "Siberian Retriever  (Siberian Husky x Labrador Retriever mix)"
    },
    {
      "name": "Siberian Shiba  (Siberian Husky x Shiba Inu mix)"
    },
    {
      "name": "Siberpoo  (Siberian Husky x Poodle mix)"
    },
    {
      "name": "Silkchon  (Bichon Frise x Silky Terrier mix)"
    },
    {
      "name": "Silkese  (Maltese x Silky Terrier mix)"
    },
    {
      "name": "Silkin  (Japanese Chin x Silky Terrier mix)"
    },
    {
      "name": "Silkinese  (Pekingese x Silky Terrier mix)"
    },
    {
      "name": "Silkland Terrier  (Silky Terrier x Westie mix)"
    },
    {
      "name": "Silkshire Terrier  (Silky Terrier x Yorkshire Terrier mix)"
    },
    {},
    {
      "name": "Silkshund  (Dachshund x Silky Terrier mix)"
    },
    {
      "name": "Silky Cairn  (Cairn Terrier x Silky Terrier mix)"
    },
    {
      "name": "Silky Cocker  (Maltese x Cocker Spaniel mix)"
    },
    {
      "name": "Silky Coton  (Coton de Tulear x Silky Terrier mix)"
    },
    {
      "name": "Silky Jack  (Jack Russell Terrier x Silky Terrier mix)"
    },
    {
      "name": "SilkyLhasa  (Lhasa Apso x Silky Terrier mix)"
    },
    {
      "name": "SilkyPin  (Miniature Pinscher x Silky Terrier mix)"
    },
    {
      "name": "Silky Pug  (Pug x Silky Terrier mix)"
    },
    {
      "name": "Silky Tzu  (Silky Terrier x ShihTzu mix)"
    },
    {
      "name": "Silkyhuahua  (Chihuahua x Silky Terrier mix)"
    },
    {
      "name": "Silkytie  (Shetland Sheepdog x Silky Terrier mix)"
    },
    {
      "name": "Silkzer  (Miniature Schnauzer x Silky Terrier mix)"
    },
    {
      "name": "SkiBorder  (American Eskimo x Border Collie mix)"
    },
    {
      "name": "SkiCollie  (American Eskimo x Collie mix)"
    },
    {
      "name": "Skilky Terrier  (Scottish Terrier x Silky Terrier mix)"
    },
    {
      "name": "SkipShzu  (Schipperke x Shih Tzu mix)"
    },
    {
      "name": "SkyePap  (Skye Terrier x Papillon mix)"
    },
    {
      "name": "Skypoo  (Poodle x Skye Terrier mix)"
    },
    {
      "name": "Smooth Chisoxy  (Smooth Fox Terrier x Chihuahua mix)"
    },
    {
      "name": "Smooth FoChon  (Bichon Frise x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth FoTzu  (Shih Tzu x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Foodle  (Poodle x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Fox Beagle  (Smooth Fox Terrier x Beagle mix)"
    },
    {
      "name": "Smooth Fox Pinscher  (Miniature Pinscher x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Foxie Doxie  (Smooth Fox Terrier x Dachshund mix)"
    },
    {
      "name": "Smooth Foxingese  (Pekingese x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Foxker  (Cocker Spaniel x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Foxillon  (Papillon x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Foxton  (Boston Terrier x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Foxy Boerboel  (Smooth Fox Terrier x Boerboel mix)"
    },
    {
      "name": "Smooth Foxy Rat Terrier  (American Rat Terrier x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Foxy Russell  (Jack Russell Terrier x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Foxybull Terrier  (Smooth Fox Terrier x Bulldog mix)"
    },
    {
      "name": "Smooth Jafox  (Japanese Chin x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Toy Foxter  (Toy Fox Terrier x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Pom Terrier  (Pomeranian x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Poxer  (Pug x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Rhodesian Collie  (Smooth Collie x Rhodesian Ridgeback mix)"
    },
    {
      "name": "Smooth Scottish Fox Terrier  (Scottish Terrier x Smooth Fox Terrier mix)"
    },
    {
      "name": "Smooth Torkie  (Smooth Fox Terrier x Yorkie mix)"
    },
    {
      "name": "Sniffon  (Miniature Schnauzer x Brussels Griffon mix)"
    },
    {
      "name": "Snorkie  (Miniature Schnauzer x Yorkshire Terrier mix)"
    },
    {
      "name": "Soft Coated Golden  (Golden Retriever x Soft Coated Wheaten mix)"
    },
    {
      "name": "Soft Coated Wheatzer  (Miniature Schnauzer x Soft Coated Wheaten Terrier mix)"
    },
    {
      "name": "Soft Coated Woxer  (Boxer x Soft Coated Wheaten mix)"
    },
    {
      "name": "Spanador  (Labrador Retriever x Cocker Spaniel mix)"
    },
    {
      "name": "Spangold Retriever  (English Springer Spaniel x Golden Retriever mix)"
    },
    {
      "name": "Spanierd  (English Springer Spaniel x German Shepherd Dog mix)"
    },
    {
      "name": "Spantriever  (English Cocker Spaniel x Labrador Retriever mix)"
    },
    {
      "name": "Spreagle  (English Springer Spaniel x Beagle mix)"
    },
    {
      "name": "Springer Basset  (English Springer Spaniel x Basset Hound mix)"
    },
    {
      "name": "Springer Husky  (English Springer Spaniel x Siberian Husky mix)"
    },
    {
      "name": "Springer Pit  (English Springer Spaniel x American Pit Bull Terrier mix)"
    },
    {
      "name": "Springer Rottie  (English Springer Spaniel x Rottweiler mix)"
    },
    {
      "name": "Springer Spaniel Sheepdog  (English Springer Spaniel x Old English Sheepdog mix)"
    },
    {
      "name": "Springerdoodle  (English Springer Spaniel x Poodle mix)"
    },
    {
      "name": "Sprocker Spaniel  (English Springer Spaniel x Cocker Spaniel mix)"
    },
    {
      "name": "Sprollie  (English Springer Spaniel x Collie mix)"
    },
    {
      "name": "Staffy Bull Bordeaux  (Staffordshire Bull Terrier x Dogue de Bordeaux mix)"
    },
    {
      "name": "Staffy Bull Bullmastiff  (Staffordshire Bull Terrier x Bullmastiff mix)"
    },
    {
      "name": "Staffweiler  (American Staffordshire Terrier x Rottweiler mix)"
    },
    {
      "name": "St. Weiler  (Rottweiler x Saint Bernard mix)"
    },
    {
      "name": "Staffie Bullweiler  (Staffordshire Bull Terrier x Rottweiler mix)"
    },
    {
      "name": "Staffy Bull Pei  (Staffordshire Bull Terrier x Shar Pei mix)"
    },
    {
      "name": "Staffy Bull Pit  (Staffordshire Bull Terrier x Pit Bull Terrier mix)"
    },
    {
      "name": "Staffy Bull Pug  (Staffordshire Bull Terrier x Pug mix)"
    },
    {
      "name": "Staffy Bull Wolfhound  (Staffordshire Bull Terrier x Irish Wolfhound mix)"
    },
    {
      "name": "Staffy Heeler  (American Staffordshire Terrier x Australian Cattle Dog mix)"
    },
    {
      "name": "Staffy Pit  (American Staffordshire Terrier x Pit Bull Terrier mix)"
    },
    {
      "name": "Standard AussTzu  (Australian Shepherd x Shih Tzu mix)"
    },
    {
      "name": "Standard Bolonauzer  (Bolognese x Standard Schnauzer mix)"
    },
    {
      "name": "Standard Border Schnollie  (Border Collie x Standard Schnauzer mix)"
    },
    {
      "name": "Standard ChesaPoo  (Chesapeake Bay Retriever x Standard Poodle mix)"
    },
    {
      "name": "Standard Gordondoodle  (Gordon Setter x Standard Poodle mix)"
    },
    {
      "name": "Standard Irish Wolf Schnauzer  (Standard Schnauzer x Irish Wolfhound mix)"
    },
    {
      "name": "Standard Kerry Blue Schnauzer  (Kerry Blue Terrier x Standard Schnauzer mix)"
    },
    {
      "name": "Standard Ratzer  (Standard Schnauzer x Rat Terrier mix)"
    },
    {
      "name": "Standard Schnauzer Chin  (Japanese Chin x Standard Schnauzer mix)"
    },
    {
      "name": "Standard Schnoodle  (Poodle x Standard Schnauzer mix)"
    },
    {
      "name": "Standard Siberian Schusky  (Standard Schnauzer x Siberian Husky mix)"
    },
    {
      "name": "Standard Wauzer  (Westie x Standard Schnauzer mix)"
    },
    {
      "name": "Standard Wire Hair Snauzer  (Standard Schnauzer x Wire Fox Terrier mix)"
    },
    {
      "name": "Stump Double Cattle Dog  (Australian Stumpy Tail Cattle Dog x Australian Cattle Dog mix)"
    },
    {
      "name": "Swiss Bernese Mt. Dog  (Bernese Mountain Dog x Greater Swiss Mountain Dog mix)"
    },
    {
      "name": "Swiss Newfie  (Greater Swiss Mountain Dog x Newfoundland mix)"
    },
    {
      "name": "Swissy Saint  (Greater Swiss Mountain Dog x Saint Bernard mix)"
    },
    {
      "name": "Swissneese  (Great Swiss Mountain Dog x Great Pyrenees mix)"
    },
    {
      "name": "Taco Terrier  (Chihuahua x Toy Fox Terrier mix)"
    },
    {
      "name": "Taylor's Bulldane  (Old Tyme Bulldog x Great Dane mix)"
    },
    {
      "name": "TerriPoo  (Australian Terrier x Poodle mix)"
    },
    {
      "name": "Tervard  (Belgian Tervuren x German Shepherd Dog mix)"
    },
    {
      "name": "Tervoodle  (Belgian Tervuren x Poodle mix)"
    },
    {
      "name": "Texas Heeler  (Australian Cattle Dog x Australian Shepherd Dog mix)"
    },
    {
      "name": "Thai Boxridge  (Thai Ridgeback x Boxer mix)"
    },
    {
      "name": "Tibalier  (Cavalier King Charles Spaniel x Tibetan Spaniel mix)"
    },
    {
      "name": "Tibecot  (Coton de Tulear x Tibetan Terrier mix)"
    },
    {
      "name": "Tibepillon Terrier  (Papillon x Tibetan Terrier mix)"
    },
    {
      "name": "Tibetan Chin  (Tibetan Spaniel x Japanese Chin mix)"
    },
    {
      "name": "Tibetan Golden Mastiff  (Tibetan Mastiff x Golden Retriever mix)"
    },
    {
      "name": "Tibetan Pap  (Tibetan Spaniel x Papillon mix)"
    },
    {
      "name": "Tibetan Pom  (Pomeranian x Tibetan Spaniel mix)"
    },
    {
      "name": "Tibetan Pug  (Pug x Tibetan Spaniel mix)"
    },
    {
      "name": "Tibetan Spaltese  (Maltese x Tibetan Spaniel mix)"
    },
    {
      "name": "Tibetan Wolfhound  (Tibetan Mastiff x Irish Wolfhound mix)"
    },
    {
      "name": "Tibetanpei Spaniel  (Tibetan Spaniel x Chinese SharPei mix)"
    },
    {
      "name": "Tibetan Staffy Spaniel  (Tibetan Spaniel x American Staffordshire Terrier mix)"
    },
    {
      "name": "Toller Pit  (Nova Scotia Duck Tolling Retriever x Pit Bull Terrier mix)"
    },
    {
      "name": "Torkie  (Toy Fox Terrier x Yorkie mix)"
    },
    {
      "name": "TosaPei  (Tosa x Shar Pei mix)"
    },
    {
      "name": "Toxirn  (Cairn Terrier x Chihuahua mix)"
    },
    {
      "name": "Toy Chisoxy  (Toy Fox Terrier x Chihuahua mix)"
    },
    {
      "name": "Toy FoChon  (Bichon Frise x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy FoTzu  (Shih Tzu x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy Foodle  (Poodle x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy Fox Beagle  (Toy Fox Terrier x Beagle mix)"
    },
    {
      "name": "Toy Fox Pinscher  (Miniature Pinscher x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy Foxie Doxie  (Toy Fox Terrier x Dachshund mix)"
    },
    {
      "name": "Toy Foxillon  (Papillon x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy Foxingese  (Pekingese x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy Foxker  (Cocker Spaniel x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy Foxton  (Boston Terrier x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy Foxy Rat Terrier  (American Rat Terrier x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy Foxy Russell  (Jack Russell Terrier x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy Foxybull Terrier  (Toy Fox Terrier x Bulldog mix)"
    },
    {
      "name": "Toy Gordondoodle  (Gordon Setter x Toy Poodle mix)"
    },
    {
      "name": "Toy Jafox  (Japanese Chin x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy Pom Terrier  (Pomeranian x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy Poxer  (Pug x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy Rat Doxie  (Dachshund x American Rat Terrier mix)"
    },
    {
      "name": "Toy Scottish Fox Terrier  (Scottish Terrier x Toy Fox Terrier mix)"
    },
    {
      "name": "Toy Torkie  (Toy Fox Terrier x Yorkie mix)"
    },
    {
      "name": "Transylvizsla Hound  (Transylvanian Hound x Vizsla mix)"
    },
    {
      "name": "Treeing Walker Coonoodle  (Treeing Walker Coonhound x Poodle mix)"
    },
    {
      "name": "Tsvetnaya BlonkaPoo  (Poodle x Russian Tsvetnaya Bolonka mix)"
    },
    {
      "name": "Ttoodle  (Poodle x Tibetan Terrier mix)"
    },
    {
      "name": "Tzu Basset  (Basset Hound x Shih Tzu mix)"
    },
    {
      "name": "Ultimate Mastiff  (Dogue de Bordeaux x Neapolitan Mastiff mix)"
    },
    {
      "name": "Vizmaraner  (Vizsla x Weimaraner mix)"
    },
    {
      "name": "Vizsla Pin  (Vizsla x Miniature Pinscher mix)"
    },
    {
      "name": "Vizsla Staff  (Vizsla x American Staffordshire Terrier mix)"
    },
    {
      "name": "Walker Beagle  (Treeing Walker Coonhound x Beagle mix)"
    },
    {
      "name": "Walker Greyhound  (Treeing Walker Coonhound x Greyhound mix)"
    },
    {
      "name": "Wauzer  (Westie x Schnauzer mix)"
    },
    {
      "name": "WeeChon  (Westie x Bichon Frise mix)"
    },
    {
      "name": "Weeranian  (Westie x Pomeranian mix)"
    },
    {
      "name": "Weiler Dane  (Rottweiler x Great Dane mix)"
    },
    {
      "name": "WeimPei  (Weimaraner x Shar Pei mix)"
    },
    {
      "name": "Weimapeake  (Weimaraner x Chesapeake Bay Retriever mix)"
    },
    {
      "name": "Weimardale  (Weimaraner x Airdale Terrier mix)"
    },
    {
      "name": "Weimardoodle  (Weimaraner x Poodle mix)"
    },
    {
      "name": "Weimarman  (Weimaraner x Doberman Pinscher mix)"
    },
    {
      "name": "Weimarrott  (Weimaraner x Rottweiler mix)"
    },
    {
      "name": "Weimshepherd (Weimaraner x German Shepherd mix)"
    },
    {
      "name": "WelChon  (Bichon Frise x Welsh Terrier mix)"
    },
    {
      "name": "Welsh Mini Fox Terrier  (Welsh Terrier x Mini Fox Terrier mix)"
    },
    {
      "name": "Welsh Smooth Fox Terrier  (Welsh Terrier x Smooth Fox Terrier mix)"
    },
    {
      "name": "Welsh Toy Fox Terrier  (Welsh Terrier x Toy Fox Terrier mix)"
    },
    {
      "name": "Welsh Wire Fox Terrier  (Welsh Terrier x Wire Fox Terrier mix)"
    },
    {
      "name": "Welshund  (Welsh Terrier x Dachshund mix)"
    },
    {
      "name": "Weltador  (Labrador Retriever x Welsh Terrier mix)"
    },
    {
      "name": "Weshi  (Shih Tzu x Westie mix)"
    },
    {
      "name": "West Australian Terrier  (Australian Terrier x West Highland White Terrier mix)"
    },
    {
      "name": "West Highland Corgi  (West Highland White Terrier (Westie) x Corgi mix)"
    },
    {
      "name": "West Highland Doxie  (Dachshund x West Highland White Terrier mix)"
    },
    {
      "name": "West Highland Husky  (Siberian Husky x West Highland White Terrier mix)"
    },
    {
      "name": "West of Argyll Terrier  (Beagle x West Highland White Terrier mix)"
    },
    {
      "name": "Westeke  (West Highland White Terrier x Schipperke mix)"
    },
    {
      "name": "WestieLaso  (Lhasa Apso x West Highland White Terrier mix)"
    },
    {
      "name": "Westie Staff  (West Highland White Terrier x American Staffordshire Terrier mix)"
    },
    {
      "name": "Westiepoo  (Westie x Poodle mix)"
    },
    {
      "name": "Westillon  (Westie x Papillon mix)"
    },
    {
      "name": "Westimo  (American Eskimo x West Highland White Terrier mix)"
    },
    {
      "name": "Weston  (West Highland White Terrier x Coton de Tulear mix)"
    },
    {
      "name": "Wheagle  (Soft Coated Wheaten Terrier x Beagle mix)"
    },
    {
      "name": "Wheatador  (Soft Coated Wheaten Terrier x Labrador Retriever mix)"
    },
    {
      "name": "Wheaten Eskimo  (American Eskimo x Soft Coated Wheaten Terrier mix)"
    },
    {
      "name": "Wheaten Pei  (Soft Coated Wheaten Terrier x Shar Pei mix)"
    },
    {
      "name": "Whipador  (Whippet x Labrador Retriever mix)"
    },
    {
      "name": "Whipperman  (Whippet x Doberman Pinscher mix)"
    },
    {
      "name": "Whippet Greyhound  (Whippet x Greyhound mix)"
    },
    {
      "name": "Whippet Shepherd  (Whippet x German Shepherd mix)"
    },
    {
      "name": "Whoodle  (Soft Coated Wheaten Terrier x Poodle mix)"
    },
    {
      "name": "Wire Chisoxy  (Wire Fox Terrier x Chihuahua mix)"
    },
    {
      "name": "Wire FoChon  (Bichon Frise x Wire Fox Terrier mix)"
    },
    {
      "name": "Wire FoTzu  (Shih Tzu x Wire Fox Terrier mix)"
    },
    {
      "name": "Wire Foodle  (Poodle x Wire Fox Terrier mix)"
    },
    {
      "name": "Wire Fox Beagle  (Wire Fox Terrier x Beagle mix)"
    },
    {
      "name": "Wire Fox Pinscher  (Wire Fox Terrier x Miniature Pinscher mix)"
    },
    {
      "name": "Wire Foxie Doxie  (Wire Fox Terrier x Dachshund mix)"
    },
    {
      "name": "Wire Foxingese  (Pekingese x Wire Fox Terrier mix)"
    },
    {
      "name": "Wire Foxker  (Cocker Spaniel x Wire Fox Terrier mix)"
    },
    {
      "name": "Wire Foxton  (Boston Terrier x Wire Fox Terrier mix)"
    },
    {
      "name": "Wire Foxy Rat Terrier  (American Rat Terrier x Wire Fox Terrier mix)"
    },
    {
      "name": "Wire Foxy Russell  (Jack Russell Terrier x Wire Fox Terrier mix)"
    },
    {
      "name": "Wire Foxybull Terrier  (Wire Fox Terrier x Bulldog mix)"
    },
    {
      "name": "Wire Hair Snauzer  (Miniature Schnauzer x Wire Fox Terrier mix)"
    },
    {
      "name": "Wire Jafox  (Japanese Chin x Wire Fox Terrier mix)"
    },
    {
      "name": "Wire Toy Foxter  (Toy Fox Terrier x Wire Fox Terrier mix)"
    },
    {
      "name": "Wire Pom Terrier  (Pomeranian x Wire Fox Terrier mix)"
    },
    {
      "name": "Wire Poxer  (Pug x Wire Fox Terrier mix)"
    },
    {
      "name": "WirePoo  (Wirehaired Fox Terrier x Poodle mix)"
    },
    {
      "name": "Wire Scottish Fox Terrier  (Scottish Terrier x Wire Fox Terrier mix)"
    },
    {
      "name": "Wire Torkie  (Wire Fox Terrier x Yorkie mix)"
    },
    {
      "name": "Wirehaired Pointing Griffiondor  (Wirehaired Pointing Griffon x Labrador Retriever mix)"
    },
    {
      "name": "Wirelsh Terrier  (Welsh Terrier x Wire Fox Terrier mix)"
    },
    {
      "name": "Wolador  (Timber Wolf x Labrador Retriever mix)"
    },
    {
      "name": "Wolamute  (Timber Wolf x Alaskan Malamute mix)"
    },
    {
      "name": "Wolfdog  (Wolf x Domestic Dog mix)"
    },
    {
      "name": "Wolfhound Dane  (Irish Wolfhound x Great Dane mix)"
    },
    {
      "name": "Woodle  (Welsh Terrier x Poodle mix)"
    },
    {
      "name": "Worgi  (Welsh Sheepdog x Corgi mix)"
    },
    {
      "name": "Wowauzer  (Miniature Schnauzer x Welsh Terrier mix)"
    },
    {
      "name": "Yoranian  (Pomeranian x Yorkshire Terrier mix)"
    },
    {
      "name": "Yorkeltie  (Yorkshire Terrier x Shetland Sheepdog (Sheltie) mix)"
    },
    {
      "name": "YorkieApso  (Lhasa Apso x Yorkshire Terrier mix)"
    },
    {
      "name": "Yorkie Beagle  (Yorkshire Terrier x Beagle mix)"
    },
    {
      "name": "Yorkie Pin  (Miniature Pinscher x Yorkshire Terrier mix)"
    },
    {
      "name": "Yorkie Russell  (Yorkshire Terrier x Jack Russell Terrier mix)"
    },
    {
      "name": "Yorkieton  (Coton de Tulear x Yorkshire Terrier mix)"
    },
    {
      "name": "Yorkillon  (Papillon x Yorkshire Terrier mix)"
    },
    {
      "name": "Yorkipoo  (Yorkie x Poodle mix)"
    },
    {
      "name": "Yorkinese  (Pekingese x Yorkie mix)"
    },
    {
      "name": "Yorksky  (Siberian Husky x Yorkshire Terrier mix)"
    },
    {
      "name": "Yorktese  (Yorkshire Terrier x Maltese mix)"
    },
    {
      "name": "Yorwich  (Yorkshire Terrier x Norwich Terrier mix)"
    },
    {
      "name": "Zuchon  (Bichon Frise x Shih Tzu mix)"
    }
  ];

var cities = [
    {
    "city": "A Coruña"
    },
    {
    "city": "Aachen"
    },
    {
    "city": "Aarhus"
    },
    {
    "city": "Abbeville"
    },
    {
    "city": "Aberdeen (UK)"
    },
    {
    "city": "Aberdeen (South Dakota)"
    },
    {
    "city": "Aberdeen (Washington)"
    },
    {
    "city": "Abidjan"
    },
    {
    "city": "Abilene"
    },
    {
    "city": "Abu Dhabi"
    },
    {
    "city": "Abuja"
    },
    {
    "city": "Acapulco"
    },
    {
    "city": "Accra"
    },
    {
    "city": "Adamstown"
    },
    {
    "city": "Addis Ababa"
    },
    {
    "city": "Adelaide"
    },
    {
    "city": "Adelboden"
    },
    {
    "city": "Agadir"
    },
    {
    "city": "Agde"
    },
    {
    "city": "Agen"
    },
    {
    "city": "Agios Nikolaos"
    },
    {
    "city": "Agra"
    },
    {
    "city": "Agrigento"
    },
    {
    "city": "Agropoli"
    },
    {
    "city": "Ahmedabad"
    },
    {
    "city": "Aigues-Mortes"
    },
    {
    "city": "Aix-en-Provence"
    },
    {
    "city": "Aix-les-Bains"
    },
    {
    "city": "Ajaccio"
    },
    {
    "city": "Ajman"
    },
    {
    "city": "Akron"
    },
    {
    "city": "Al Ain"
    },
    {
    "city": "Alanya"
    },
    {
    "city": "Alaró"
    },
    {
    "city": "Albacete"
    },
    {
    "city": "Albany"
    },
    {
    "city": "Albenga"
    },
    {
    "city": "Albi"
    },
    {
    "city": "Albufeira"
    },
    {
    "city": "Albuquerque"
    },
    {
    "city": "Alcudia"
    },
    {
    "city": "Aleppo"
    },
    {
    "city": "Alessandria"
    },
    {
    "city": "Ålesund"
    },
    {
    "city": "Alexandria (U.S.)"
    },
    {
    "city": "Alexandria (Egypt)"
    },
    {
    "city": "Algeciras"
    },
    {
    "city": "Alghero"
    },
    {
    "city": "Algiers"
    },
    {
    "city": "Alicante"
    },
    {
    "city": "Alkmaar"
    },
    {
    "city": "Allentown"
    },
    {
    "city": "Almaty"
    },
    {
    "city": "Alofi"
    },
    {
    "city": "Alpe d'Huez"
    },
    {
    "city": "Alta Badia"
    },
    {
    "city": "Altea"
    },
    {
    "city": "Altoona"
    },
    {
    "city": "Amagansett"
    },
    {
    "city": "Amalfi"
    },
    {
    "city": "Amapala"
    },
    {
    "city": "Amarillo"
    },
    {
    "city": "Ambon"
    },
    {
    "city": "Amersfoort"
    },
    {
    "city": "Amiens"
    },
    {
    "city": "Amman"
    },
    {
    "city": "Amsterdam"
    },
    {
    "city": "Anaheim"
    },
    {
    "city": "Anchorage"
    },
    {
    "city": "Ancona"
    },
    {
    "city": "Andalo"
    },
    {
    "city": "Andermatt"
    },
    {
    "city": "Andorra la Vella"
    },
    {
    "city": "Andratx"
    },
    {
    "city": "Andria"
    },
    {
    "city": "Angeles City"
    },
    {
    "city": "Angers"
    },
    {
    "city": "Angoulême"
    },
    {
    "city": "Ankara"
    },
    {
    "city": "Ann Arbor"
    },
    {
    "city": "Anna Maria City"
    },
    {
    "city": "Annapolis"
    },
    {
    "city": "Annecy"
    },
    {
    "city": "Antalya"
    },
    {
    "city": "Antananarivo"
    },
    {
    "city": "Antibes"
    },
    {
    "city": "Antigua Guatemala"
    },
    {
    "city": "Antwerp"
    },
    {
    "city": "Anzio"
    },
    {
    "city": "Ao Nang"
    },
    {
    "city": "Aosta"
    },
    {
    "city": "Apeldoorn"
    },
    {
    "city": "Apia"
    },
    {
    "city": "Appleton"
    },
    {
    "city": "Aqaba"
    },
    {
    "city": "Aracaju"
    },
    {
    "city": "Arcachon"
    },
    {
    "city": "Arenzano"
    },
    {
    "city": "Arequipa"
    },
    {
    "city": "Arezzo"
    },
    {
    "city": "Argostoli"
    },
    {
    "city": "Arica"
    },
    {
    "city": "Arles"
    },
    {
    "city": "Arlington (Virginia)"
    },
    {
    "city": "Arlington (Texas)"
    },
    {
    "city": "Armagh"
    },
    {
    "city": "Arnhem"
    },
    {
    "city": "Arosa"
    },
    {
    "city": "Arras"
    },
    {
    "city": "Arrecife"
    },
    {
    "city": "Artà"
    },
    {
    "city": "Asbury Park"
    },
    {
    "city": "Ascoli Piceno"
    },
    {
    "city": "Ascona"
    },
    {
    "city": "Ashdod"
    },
    {
    "city": "Ashgabat"
    },
    {
    "city": "Ashkelon"
    },
    {
    "city": "Asmara"
    },
    {
    "city": "Aspen"
    },
    {
    "city": "Asti"
    },
    {
    "city": "Astoria"
    },
    {
    "city": "Asunción"
    },
    {
    "city": "Atafu"
    },
    {
    "city": "Athens"
    },
    {
    "city": "Athlone"
    },
    {
    "city": "Atlanta"
    },
    {
    "city": "Atlantic Beach (New York)"
    },
    {
    "city": "Atlantic Beach (North Carolina)"
    },
    {
    "city": "Atlantic City"
    },
    {
    "city": "Auckland"
    },
    {
    "city": "Augsburg"
    },
    {
    "city": "Augusta (Georgia)"
    },
    {
    "city": "Augusta (Maine)"
    },
    {
    "city": "Aurora (Colorado)"
    },
    {
    "city": "Aurora (Illinois)"
    },
    {
    "city": "Austin"
    },
    {
    "city": "Auxerre"
    },
    {
    "city": "Avalon (California)"
    },
    {
    "city": "Avalon (New Jersey)"
    },
    {
    "city": "Avarua"
    },
    {
    "city": "Aveiro"
    },
    {
    "city": "Avellino"
    },
    {
    "city": "Avignon"
    },
    {
    "city": "Avila Beach"
    },
    {
    "city": "Avon"
    },
    {
    "city": "Avoriaz"
    },
    {
    "city": "Axamer Lizum"
    },
    {
    "city": "Ayia Napa"
    },
    {
    "city": "Azusa"
    },
    {},
    {
    "city": "Bad Gastein"
    },
    {
    "city": "Bad Hofgastein"
    },
    {
    "city": "Baden"
    },
    {
    "city": "Baghdad"
    },
    {
    "city": "Baiona"
    },
    {
    "city": "Bakersfield"
    },
    {
    "city": "Baku"
    },
    {
    "city": "Bald Head Island"
    },
    {
    "city": "Baltimore"
    },
    {
    "city": "Bamako"
    },
    {
    "city": "Banda Aceh"
    },
    {
    "city": "Bandar Seri Begawan"
    },
    {
    "city": "Bandol"
    },
    {
    "city": "Banff"
    },
    {
    "city": "Bangalore"
    },
    {
    "city": "Bangkok"
    },
    {
    "city": "Bangor"
    },
    {
    "city": "Bangui"
    },
    {
    "city": "Banjul"
    },
    {
    "city": "Bar"
    },
    {
    "city": "Bar Harbor"
    },
    {
    "city": "Barcelona"
    },
    {
    "city": "Bari"
    },
    {
    "city": "Barletta"
    },
    {
    "city": "Barnegat Light"
    },
    {
    "city": "Barnum Island"
    },
    {
    "city": "Barrie"
    },
    {
    "city": "Barstow"
    },
    {
    "city": "Basel"
    },
    {
    "city": "Basey"
    },
    {
    "city": "Basseterre"
    },
    {
    "city": "Basse-Terre"
    },
    {
    "city": "Bastia"
    },
    {
    "city": "Bata"
    },
    {
    "city": "Batam"
    },
    {
    "city": "Bath"
    },
    {
    "city": "Baton Rouge"
    },
    {
    "city": "Batu"
    },
    {
    "city": "Batumi"
    },
    {
    "city": "Bayonne"
    },
    {
    "city": "Beach Haven"
    },
    {
    "city": "Bear Island"
    },
    {
    "city": "Beaufort"
    },
    {
    "city": "Beaulieu-sur-Mer"
    },
    {
    "city": "Beaumont"
    },
    {
    "city": "Beaune"
    },
    {
    "city": "Beersheba"
    },
    {
    "city": "Beijing"
    },
    {
    "city": "Beirut"
    },
    {
    "city": "Belek"
    },
    {
    "city": "Belfast"
    },
    {
    "city": "Belfort"
    },
    {
    "city": "Belgrade"
    },
    {
    "city": "Belize City"
    },
    {
    "city": "Bellingham"
    },
    {
    "city": "Bellinzona"
    },
    {
    "city": "Belluno"
    },
    {
    "city": "Belmopan"
    },
    {
    "city": "Belo Horizonte"
    },
    {
    "city": "Bemidji"
    },
    {
    "city": "Benalmadena"
    },
    {
    "city": "Bend"
    },
    {
    "city": "Bendigo"
    },
    {
    "city": "Benevento"
    },
    {
    "city": "Benicàssim"
    },
    {
    "city": "Benidorm"
    },
    {
    "city": "Bergamo"
    },
    {
    "city": "Bergen"
    },
    {
    "city": "Bergerac"
    },
    {
    "city": "Berkeley"
    },
    {
    "city": "Berlin"
    },
    {
    "city": "Bern"
    },
    {
    "city": "Besançon"
    },
    {
    "city": "Bethlehem"
    },
    {
    "city": "Beverly Hills"
    },
    {
    "city": "Béziers"
    },
    {
    "city": "Biarritz"
    },
    {
    "city": "Biel/Bienne"
    },
    {
    "city": "Bielefeld"
    },
    {
    "city": "Biella"
    },
    {
    "city": "Big Pine Key"
    },
    {
    "city": "Bilbao"
    },
    {
    "city": "Billings"
    },
    {
    "city": "Biloxi"
    },
    {
    "city": "Birmingham (UK)"
    },
    {
    "city": "Birmingham (U.S.)"
    },
    {
    "city": "Bishkek"
    },
    {
    "city": "Bismarck"
    },
    {
    "city": "Bissau"
    },
    {
    "city": "Blanes"
    },
    {
    "city": "Bled"
    },
    {
    "city": "Blois"
    },
    {
    "city": "Bloomington"
    },
    {
    "city": "Blumenau"
    },
    {
    "city": "Boca Chica"
    },
    {
    "city": "Boca Grande"
    },
    {
    "city": "Boca Raton"
    },
    {
    "city": "Bochum"
    },
    {
    "city": "Bodrum"
    },
    {
    "city": "Bogotá"
    },
    {
    "city": "Boise"
    },
    {
    "city": "Bologna"
    },
    {
    "city": "Bolzano"
    },
    {
    "city": "Bonifacio"
    },
    {
    "city": "Bonn"
    },
    {
    "city": "Bordeaux"
    },
    {
    "city": "Bordighera"
    },
    {
    "city": "Bormio"
    },
    {
    "city": "Boston"
    },
    {
    "city": "Boulder"
    },
    {
    "city": "Boulogne-sur-Mer"
    },
    {
    "city": "Bourges"
    },
    {
    "city": "Bowling Green"
    },
    {
    "city": "Boynton Beach"
    },
    {
    "city": "Bozeman"
    },
    {
    "city": "Bradenton"
    },
    {
    "city": "Bradenton Beach"
    },
    {
    "city": "Bradford"
    },
    {
    "city": "Braga"
    },
    {
    "city": "Brampton"
    },
    {
    "city": "Brandon"
    },
    {
    "city": "Brantford"
    },
    {
    "city": "Brasilia"
    },
    {
    "city": "Bratislava"
    },
    {
    "city": "Braunschweig"
    },
    {
    "city": "Brazzaville"
    },
    {
    "city": "Breda"
    },
    {
    "city": "Bregenz"
    },
    {
    "city": "Brela"
    },
    {
    "city": "Bremen"
    },
    {
    "city": "Bremerhaven"
    },
    {
    "city": "Brescia"
    },
    {
    "city": "Brest"
    },
    {
    "city": "Briançon"
    },
    {
    "city": "Bridgehampton"
    },
    {
    "city": "Bridgeport"
    },
    {
    "city": "Bridgetown"
    },
    {
    "city": "Brigantine"
    },
    {
    "city": "Brighton"
    },
    {
    "city": "Brindisi"
    },
    {
    "city": "Brisbane"
    },
    {
    "city": "Bristol"
    },
    {
    "city": "Brixen"
    },
    {
    "city": "Brixental"
    },
    {
    "city": "Brno"
    },
    {
    "city": "Brookings"
    },
    {
    "city": "Brownsville"
    },
    {
    "city": "Bruges"
    },
    {
    "city": "Brunswick"
    },
    {
    "city": "Brussels"
    },
    {
    "city": "Bucharest"
    },
    {
    "city": "Budapest"
    },
    {
    "city": "Budva"
    },
    {
    "city": "Buenos Aires"
    },
    {
    "city": "Buffalo"
    },
    {
    "city": "Bujumbura"
    },
    {
    "city": "Bukittinggi"
    },
    {
    "city": "Burgas"
    },
    {
    "city": "Burlington (U.S.)"
    },
    {
    "city": "Burlington (Canada)"
    },
    {
    "city": "Burnt Pine"
    },
    {
    "city": "Burton"
    },
    {
    "city": "Butte"
    },
    {
    "city": "Buxton"
    },
    {},
    {
    "city": "Cabo San Lucas"
    },
    {
    "city": "Cadaqués"
    },
    {
    "city": "Cádiz"
    },
    {
    "city": "Caen"
    },
    {
    "city": "Cagliari"
    },
    {
    "city": "Cagnes-sur-Mer"
    },
    {
    "city": "Cairns"
    },
    {
    "city": "Cairo"
    },
    {
    "city": "Cala Bona"
    },
    {
    "city": "Cala d'Or"
    },
    {
    "city": "Cala Millor"
    },
    {
    "city": "Cala Ratjada"
    },
    {
    "city": "Calais"
    },
    {
    "city": "Calella"
    },
    {
    "city": "Calgary"
    },
    {
    "city": "Cali"
    },
    {
    "city": "Caloundra"
    },
    {
    "city": "Calp"
    },
    {
    "city": "Caltanissetta"
    },
    {
    "city": "Calvi"
    },
    {
    "city": "Cambridge (UK)"
    },
    {
    "city": "Cambridge (U.S.)"
    },
    {
    "city": "Cambrils"
    },
    {
    "city": "Camden"
    },
    {
    "city": "Campbell River"
    },
    {
    "city": "Campinas"
    },
    {
    "city": "Campobasso"
    },
    {
    "city": "Can Pastilla"
    },
    {
    "city": "Can Picafort"
    },
    {
    "city": "Canazei"
    },
    {
    "city": "Canberra"
    },
    {
    "city": "Cancun"
    },
    {
    "city": "Cannes"
    },
    {
    "city": "Cannon Beach"
    },
    {
    "city": "Canterbury"
    },
    {
    "city": "Canton"
    },
    {
    "city": "Canyamel"
    },
    {
    "city": "Capdepera"
    },
    {
    "city": "Cape Canaveral"
    },
    {
    "city": "Cape Coral"
    },
    {
    "city": "Cape May"
    },
    {
    "city": "Cape Town"
    },
    {
    "city": "Capitola"
    },
    {
    "city": "Captiva"
    },
    {
    "city": "Caracas"
    },
    {
    "city": "Carbonia"
    },
    {
    "city": "Carcassonne"
    },
    {
    "city": "Cardiff"
    },
    {
    "city": "Carlisle"
    },
    {
    "city": "Carlsbad"
    },
    {
    "city": "Carmel-by-the-Sea"
    },
    {
    "city": "Carolina Beach"
    },
    {
    "city": "Carova Beach"
    },
    {
    "city": "Carpi"
    },
    {
    "city": "Carpinteria"
    },
    {
    "city": "Carrara"
    },
    {
    "city": "Carson City"
    },
    {
    "city": "Cartagena (Colombia)"
    },
    {
    "city": "Cartagena (Spain)"
    },
    {
    "city": "Casablanca"
    },
    {
    "city": "Caserta"
    },
    {
    "city": "Casper"
    },
    {
    "city": "Cassis"
    },
    {
    "city": "Castellón de la Plana"
    },
    {
    "city": "Castelrotto"
    },
    {
    "city": "Castletown"
    },
    {
    "city": "Castries"
    },
    {
    "city": "Caswell Beach"
    },
    {
    "city": "Catania"
    },
    {
    "city": "Catanzaro"
    },
    {
    "city": "Caxias do Sul"
    },
    {
    "city": "Cayenne"
    },
    {
    "city": "Cebu City"
    },
    {
    "city": "Cedar Island"
    },
    {
    "city": "Cedar Key"
    },
    {
    "city": "Cedar Rapids"
    },
    {
    "city": "Celle"
    },
    {
    "city": "Cervinia"
    },
    {
    "city": "Cesena"
    },
    {
    "city": "Český Krumlov"
    },
    {
    "city": "Çeşme"
    },
    {
    "city": "Chamonix"
    },
    {
    "city": "Chandler"
    },
    {
    "city": "Chania"
    },
    {
    "city": "Charleroi"
    },
    {
    "city": "Charleston (West Virginia)"
    },
    {
    "city": "Charleston (South Carolina)"
    },
    {
    "city": "Charlestown"
    },
    {
    "city": "Charlotte"
    },
    {
    "city": "Charlotte Amalie"
    },
    {
    "city": "Charlottetown"
    },
    {
    "city": "Chartres"
    },
    {
    "city": "Chatham"
    },
    {
    "city": "Chattanooga"
    },
    {
    "city": "Chelmsford"
    },
    {
    "city": "Chemnitz"
    },
    {
    "city": "Chennai"
    },
    {
    "city": "Cherbourg"
    },
    {
    "city": "Chesapeake"
    },
    {
    "city": "Chester"
    },
    {
    "city": "Cheyenne"
    },
    {
    "city": "Chiang Mai"
    },
    {
    "city": "Chiang Rai"
    },
    {
    "city": "Chiavari"
    },
    {
    "city": "Chicago"
    },
    {
    "city": "Chichester"
    },
    {
    "city": "Chiclayo"
    },
    {
    "city": "Chieti"
    },
    {
    "city": "Chincoteague"
    },
    {
    "city": "Chioggia"
    },
    {
    "city": "Chios"
    },
    {
    "city": "Chișinău"
    },
    {
    "city": "Chokoloskee"
    },
    {
    "city": "Chonburi"
    },
    {
    "city": "Christchurch"
    },
    {
    "city": "Christiansted"
    },
    {
    "city": "Chula Vista"
    },
    {
    "city": "Chur"
    },
    {
    "city": "Cincinnati"
    },
    {
    "city": "Ciutadella de Menorca"
    },
    {
    "city": "Civitavecchia"
    },
    {
    "city": "Clarksville"
    },
    {
    "city": "Clearwater"
    },
    {
    "city": "Clearwater Beach"
    },
    {
    "city": "Clermont-Ferrand"
    },
    {
    "city": "Cleveland"
    },
    {
    "city": "Cockburn Town"
    },
    {
    "city": "Cocoa Beach"
    },
    {
    "city": "Coconut Creek"
    },
    {
    "city": "Coimbra"
    },
    {
    "city": "Collioure"
    },
    {
    "city": "Colmar"
    },
    {
    "city": "Cologne"
    },
    {
    "city": "Colombo"
    },
    {
    "city": "Colón"
    },
    {
    "city": "Colonia del Sacramento"
    },
    {
    "city": "Colorado Springs"
    },
    {
    "city": "Columbia (South Carolina)"
    },
    {
    "city": "Columbia (Missouri)"
    },
    {
    "city": "Columbus"
    },
    {
    "city": "Como"
    },
    {
    "city": "Conakry"
    },
    {
    "city": "Concepción"
    },
    {
    "city": "Concord"
    },
    {
    "city": "Conil de la Frontera"
    },
    {
    "city": "Conway"
    },
    {
    "city": "Copenhagen"
    },
    {
    "city": "Coral Springs"
    },
    {
    "city": "Córdoba (Argentina)"
    },
    {
    "city": "Córdoba (Spain)"
    },
    {
    "city": "Corfu"
    },
    {
    "city": "Corinth"
    },
    {
    "city": "Cork"
    },
    {
    "city": "Coro"
    },
    {
    "city": "Corolla"
    },
    {
    "city": "Coron Town"
    },
    {
    "city": "Corpus Christi"
    },
    {
    "city": "Corralejo"
    },
    {
    "city": "Cortina d'Ampezzo"
    },
    {
    "city": "Cosenza"
    },
    {
    "city": "Costa Adeje"
    },
    {
    "city": "Cotabato City"
    },
    {
    "city": "Cottbus"
    },
    {
    "city": "Courchevel"
    },
    {
    "city": "Courmayeur"
    },
    {
    "city": "Courtenay"
    },
    {
    "city": "Coventry"
    },
    {
    "city": "Covington"
    },
    {
    "city": "Coxen Hole"
    },
    {
    "city": "Coyhaique"
    },
    {
    "city": "Cozumel"
    },
    {
    "city": "Crans-Montana"
    },
    {
    "city": "Cremona"
    },
    {
    "city": "Crotone"
    },
    {
    "city": "Cruz Bay"
    },
    {
    "city": "Cudjoe Key"
    },
    {
    "city": "Cuenca (Ecuador)"
    },
    {
    "city": "Cuenca (Spain)"
    },
    {
    "city": "Cumaná"
    },
    {
    "city": "Cuneo"
    },
    {
    "city": "Cusco"
    },
    {},
    {
    "city": "Da Nang"
    },
    {
    "city": "Dachau"
    },
    {
    "city": "Dahab"
    },
    {
    "city": "Dakar"
    },
    {
    "city": "Dallas"
    },
    {
    "city": "Damascus"
    },
    {
    "city": "Dana Point"
    },
    {
    "city": "Dar es Salaam"
    },
    {
    "city": "Darien"
    },
    {
    "city": "Darmstadt"
    },
    {
    "city": "Darwin"
    },
    {
    "city": "Daufuskie Island"
    },
    {
    "city": "Daugavpils"
    },
    {
    "city": "Dauphin Island"
    },
    {
    "city": "Davao City"
    },
    {
    "city": "Davenport"
    },
    {
    "city": "Davos"
    },
    {
    "city": "Dayton"
    },
    {
    "city": "Daytona Beach"
    },
    {
    "city": "Deauville"
    },
    {
    "city": "Decatur"
    },
    {
    "city": "Deerfield Beach"
    },
    {
    "city": "Del Mar"
    },
    {
    "city": "Delft"
    },
    {
    "city": "Delhi"
    },
    {
    "city": "Delray Beach"
    },
    {
    "city": "Den Bosch"
    },
    {
    "city": "Denia"
    },
    {
    "city": "Denpasar"
    },
    {
    "city": "Denton"
    },
    {
    "city": "Denver"
    },
    {
    "city": "Derby"
    },
    {
    "city": "Derry"
    },
    {
    "city": "Des Moines"
    },
    {
    "city": "Detroit"
    },
    {
    "city": "Dewees Island"
    },
    {
    "city": "Dhaka"
    },
    {
    "city": "Diamond Beach"
    },
    {
    "city": "Didim"
    },
    {
    "city": "Dieppe"
    },
    {
    "city": "Dijon"
    },
    {
    "city": "Dili"
    },
    {
    "city": "Djibouti"
    },
    {
    "city": "Dodoma"
    },
    {
    "city": "Doha"
    },
    {
    "city": "Dolomiti Superski"
    },
    {
    "city": "Dordrecht"
    },
    {
    "city": "Dorfgastein"
    },
    {
    "city": "Dortmund"
    },
    {
    "city": "Dothan"
    },
    {
    "city": "Douala"
    },
    {
    "city": "Douglas"
    },
    {
    "city": "Dover (Delaware)"
    },
    {
    "city": "Dover (New Hampshire)"
    },
    {
    "city": "Dresden"
    },
    {
    "city": "Dubai"
    },
    {
    "city": "Dublin"
    },
    {
    "city": "Dubrovnik"
    },
    {
    "city": "Duck"
    },
    {
    "city": "Duisburg"
    },
    {
    "city": "Duluth"
    },
    {
    "city": "Dumaguete"
    },
    {
    "city": "Dumai"
    },
    {
    "city": "Duncan"
    },
    {
    "city": "Dundalk"
    },
    {
    "city": "Dundee"
    },
    {
    "city": "Dunedin"
    },
    {
    "city": "Dunkirk"
    },
    {
    "city": "Durham (UK)"
    },
    {
    "city": "Durham (U.S.)"
    },
    {
    "city": "Dushanbe"
    },
    {
    "city": "Düsseldorf"
    },
    {},
    {
    "city": "East Atlantic Beach"
    },
    {
    "city": "East Hampton"
    },
    {
    "city": "Eastbourne"
    },
    {
    "city": "Eastport"
    },
    {
    "city": "Eatons Neck"
    },
    {
    "city": "Eau Claire"
    },
    {
    "city": "Edgartown"
    },
    {
    "city": "Edinburgh"
    },
    {
    "city": "Edisto Beach"
    },
    {
    "city": "Edmonton"
    },
    {
    "city": "Eilat"
    },
    {
    "city": "Eindhoven"
    },
    {
    "city": "El Nido"
    },
    {
    "city": "El Paso"
    },
    {
    "city": "Elche"
    },
    {
    "city": "Elizabeth"
    },
    {
    "city": "Elko"
    },
    {
    "city": "Ellmau"
    },
    {
    "city": "Elm"
    },
    {
    "city": "Emerald Isle"
    },
    {
    "city": "Empuriabrava"
    },
    {
    "city": "Encinitas"
    },
    {
    "city": "Engelberg"
    },
    {
    "city": "Englewood Beach"
    },
    {
    "city": "Enna"
    },
    {
    "city": "Enschede"
    },
    {
    "city": "Épinal"
    },
    {
    "city": "Erfurt"
    },
    {
    "city": "Erie"
    },
    {
    "city": "Erlangen"
    },
    {
    "city": "Esbjerg"
    },
    {
    "city": "Espace Killy"
    },
    {
    "city": "Essaouira"
    },
    {
    "city": "Essen"
    },
    {
    "city": "Estepona"
    },
    {
    "city": "Étretat"
    },
    {
    "city": "Eugene"
    },
    {
    "city": "Eureka"
    },
    {
    "city": "Evansville"
    },
    {
    "city": "Everett"
    },
    {
    "city": "Everglades City"
    },
    {
    "city": "Exeter"
    },
    {
    "city": "Èze"
    },
    {},
    {
    "city": "Faenza"
    },
    {
    "city": "Fairbanks"
    },
    {
    "city": "Fakaofo"
    },
    {
    "city": "Falmouth"
    },
    {
    "city": "Famagusta"
    },
    {
    "city": "Fano"
    },
    {
    "city": "Fargo"
    },
    {
    "city": "Faro"
    },
    {
    "city": "Fayetteville (North Carolina)"
    },
    {
    "city": "Fayetteville (Arkansas)"
    },
    {
    "city": "Fermo"
    },
    {
    "city": "Fernandina Beach"
    },
    {
    "city": "Ferrara"
    },
    {
    "city": "Fethiye"
    },
    {
    "city": "Fez"
    },
    {
    "city": "Fieberbrunn"
    },
    {
    "city": "Figure Eight Island"
    },
    {
    "city": "Filzmoos"
    },
    {
    "city": "Finale Ligure"
    },
    {
    "city": "Fisher Island"
    },
    {
    "city": "Fiumicino"
    },
    {
    "city": "Flagstaff"
    },
    {
    "city": "Flaine"
    },
    {
    "city": "Flint"
    },
    {
    "city": "Florence"
    },
    {
    "city": "Florence (Alabama)"
    },
    {
    "city": "Flores"
    },
    {
    "city": "Foggia"
    },
    {
    "city": "Folgarida"
    },
    {
    "city": "Folly Beach"
    },
    {
    "city": "Fontana"
    },
    {
    "city": "Forest Beach"
    },
    {
    "city": "Forlì"
    },
    {
    "city": "Fort Caswell"
    },
    {
    "city": "Fort Collins"
    },
    {
    "city": "Fort Fremont"
    },
    {
    "city": "Fort Lauderdale"
    },
    {
    "city": "Fort Myers"
    },
    {
    "city": "Fort Myers Beach"
    },
    {
    "city": "Fort Pierce"
    },
    {
    "city": "Fort Smith"
    },
    {
    "city": "Fort Wayne"
    },
    {
    "city": "Fort Worth"
    },
    {
    "city": "Fort-de-France"
    },
    {
    "city": "Forte dei Marmi"
    },
    {
    "city": "Foz do Iguaçu"
    },
    {
    "city": "Frankfort"
    },
    {
    "city": "Frankfurt am Main"
    },
    {
    "city": "Franklin"
    },
    {
    "city": "Frederick"
    },
    {
    "city": "Fredericton"
    },
    {
    "city": "Frederiksted"
    },
    {
    "city": "Freeport"
    },
    {
    "city": "Freetown"
    },
    {
    "city": "Freiburg"
    },
    {
    "city": "Fremont"
    },
    {
    "city": "Fresno"
    },
    {
    "city": "Fribourg"
    },
    {
    "city": "Fripp Island"
    },
    {
    "city": "Frisco"
    },
    {
    "city": "Frogmore"
    },
    {
    "city": "Frosinone"
    },
    {
    "city": "Fuengirola"
    },
    {
    "city": "Fujairah"
    },
    {
    "city": "Fukuoka"
    },
    {
    "city": "Funafuti"
    },
    {
    "city": "Funchal"
    },
    {},
    {
    "city": "Gaborone"
    },
    {
    "city": "Gainesville"
    },
    {
    "city": "Galtür"
    },
    {
    "city": "Galway"
    },
    {
    "city": "Gandia"
    },
    {
    "city": "Garden Grove"
    },
    {
    "city": "Garland"
    },
    {
    "city": "Gastonia"
    },
    {
    "city": "Gatineau"
    },
    {
    "city": "Gaza City"
    },
    {
    "city": "Gdansk"
    },
    {
    "city": "Gdynia"
    },
    {
    "city": "Geelong"
    },
    {
    "city": "Gelsenkirchen"
    },
    {
    "city": "Geneva"
    },
    {
    "city": "Genoa"
    },
    {
    "city": "George Town (Cayman Islands)"
    },
    {
    "city": "George Town (Malaysia)"
    },
    {
    "city": "Georgetown"
    },
    {
    "city": "Ghent"
    },
    {
    "city": "Gijón"
    },
    {
    "city": "Gilbert"
    },
    {
    "city": "Girona"
    },
    {
    "city": "Gitega"
    },
    {
    "city": "Giza"
    },
    {
    "city": "Glasgow"
    },
    {
    "city": "Glendale (Arizona)"
    },
    {
    "city": "Glendale (California)"
    },
    {
    "city": "Gloucester"
    },
    {
    "city": "Gold Coast"
    },
    {
    "city": "Gorizia"
    },
    {
    "city": "Gosau"
    },
    {
    "city": "Gothenburg"
    },
    {
    "city": "Göttingen"
    },
    {
    "city": "Gouda"
    },
    {
    "city": "Granada (Spain)"
    },
    {
    "city": "Granada (Nicaragua)"
    },
    {
    "city": "Grand Forks"
    },
    {
    "city": "Grand Island (Nebraska)"
    },
    {
    "city": "Grand Island (New York)"
    },
    {
    "city": "Grand Junction"
    },
    {
    "city": "Grand Prairie"
    },
    {
    "city": "Grand Rapids"
    },
    {
    "city": "Grande Prairie"
    },
    {
    "city": "Granville"
    },
    {
    "city": "Grasse"
    },
    {
    "city": "Graz"
    },
    {
    "city": "Great Falls"
    },
    {
    "city": "Greeley"
    },
    {
    "city": "Green Bay"
    },
    {
    "city": "Greensboro"
    },
    {
    "city": "Greenville NC"
    },
    {
    "city": "Greenville SC"
    },
    {
    "city": "Grenoble"
    },
    {
    "city": "Grindelwald"
    },
    {
    "city": "Groningen"
    },
    {
    "city": "Grossarl"
    },
    {
    "city": "Grosseto"
    },
    {
    "city": "Grover Beach"
    },
    {
    "city": "Gstaad"
    },
    {
    "city": "Guadalajara"
    },
    {
    "city": "Guadalupe"
    },
    {
    "city": "Guangzhou"
    },
    {
    "city": "Guatemala City"
    },
    {
    "city": "Guayaquil"
    },
    {
    "city": "Guelph"
    },
    {
    "city": "Guimarães"
    },
    {
    "city": "Gulf Shores"
    },
    {
    "city": "Gulfport"
    },
    {
    "city": "Gustavia"
    },
    {},
    {
    "city": "Haarlem"
    },
    {
    "city": "Haifa"
    },
    {
    "city": "Half Moon Bay"
    },
    {
    "city": "Halifax"
    },
    {
    "city": "Halle"
    },
    {
    "city": "Hamburg"
    },
    {
    "city": "Hamilton (Bermuda)"
    },
    {
    "city": "Hamilton (Canada)"
    },
    {
    "city": "Hamilton (New Zealand)"
    },
    {
    "city": "Hampton"
    },
    {
    "city": "Hampton Bays"
    },
    {
    "city": "Hanford"
    },
    {
    "city": "Hangzhou"
    },
    {
    "city": "Hannover"
    },
    {
    "city": "Hanoi"
    },
    {
    "city": "Harare"
    },
    {
    "city": "Harbor Island"
    },
    {
    "city": "Harbor Isle"
    },
    {
    "city": "Harbour Town"
    },
    {
    "city": "Hargeisa"
    },
    {
    "city": "Harkers Island"
    },
    {
    "city": "Harrisburg"
    },
    {
    "city": "Hartford"
    },
    {
    "city": "Harvey Cedars"
    },
    {
    "city": "Hasselt"
    },
    {
    "city": "Hastings"
    },
    {
    "city": "Hat Yai"
    },
    {
    "city": "Hatteras"
    },
    {
    "city": "Hattiesburg"
    },
    {
    "city": "Havana"
    },
    {
    "city": "Heidelberg"
    },
    {
    "city": "Heilbronn"
    },
    {
    "city": "Heiligenblut"
    },
    {
    "city": "Helena"
    },
    {
    "city": "Helsinki"
    },
    {
    "city": "Henderson"
    },
    {
    "city": "Heraklion"
    },
    {
    "city": "Herceg Novi"
    },
    {
    "city": "Hereford"
    },
    {
    "city": "Hermosa Beach"
    },
    {
    "city": "Hervey Bay"
    },
    {
    "city": "Hialeah"
    },
    {
    "city": "Hillsboro"
    },
    {
    "city": "Hilton Head Island"
    },
    {
    "city": "Hilton Head Plantation"
    },
    {
    "city": "Hinterglemm"
    },
    {
    "city": "Hinterstoder"
    },
    {
    "city": "Hiroshima"
    },
    {
    "city": "Hoi An"
    },
    {
    "city": "Hobart"
    },
    {
    "city": "Ho Chi Minh City"
    },
    {
    "city": "Holbrook"
    },
    {
    "city": "Holden Beach"
    },
    {
    "city": "Hollywood (Florida)"
    },
    {
    "city": "Holmes Beach"
    },
    {
    "city": "Honfleur"
    },
    {
    "city": "Hong Kong"
    },
    {
    "city": "Honiara"
    },
    {
    "city": "Honolulu"
    },
    {
    "city": "Horsens"
    },
    {
    "city": "Hot Springs"
    },
    {
    "city": "Houston"
    },
    {
    "city": "Hua Hin"
    },
    {
    "city": "Hue"
    },
    {
    "city": "Hunting Island"
    },
    {
    "city": "Huntington"
    },
    {
    "city": "Huntington Beach"
    },
    {
    "city": "Huntsville"
    },
    {
    "city": "Hurghada"
    },
    {
    "city": "Hvar"
    },
    {
    "city": "Hyères"
    },
    {},
    {
    "city": "Ibiza Town"
    },
    {
    "city": "Iloilo City"
    },
    {
    "city": "Imola"
    },
    {
    "city": "Imperia"
    },
    {
    "city": "Inca"
    },
    {
    "city": "Indian Beach"
    },
    {
    "city": "Indianapolis"
    },
    {
    "city": "Ingolstadt"
    },
    {
    "city": "Innsbruck"
    },
    {
    "city": "Interlaken"
    },
    {
    "city": "Inverness"
    },
    {
    "city": "Ioannina"
    },
    {
    "city": "Iqaluit"
    },
    {
    "city": "Iquitos"
    },
    {
    "city": "Irvine"
    },
    {
    "city": "Irving"
    },
    {
    "city": "Ischgl"
    },
    {
    "city": "Isernia"
    },
    {
    "city": "Lahore"
    },
    {
    "city": "Islamorada"
    },
    {
    "city": "Island Park"
    },
    {
    "city": "Isle of Palms"
    },
    {
    "city": "Istanbul"
    },
    {
    "city": "İzmir"
    },
    {
    "city": "Izola"
    },
    {},
    {
    "city": "Jackson"
    },
    {
    "city": "Jackson (Tennessee)"
    },
    {
    "city": "Jacksonville"
    },
    {
    "city": "Jaipur"
    },
    {
    "city": "Jakarta"
    },
    {
    "city": "Jefferson City"
    },
    {
    "city": "Jekyll Island"
    },
    {
    "city": "Jena"
    },
    {
    "city": "Jerez de la Frontera"
    },
    {
    "city": "Jersey City"
    },
    {
    "city": "Jerusalem"
    },
    {
    "city": "Johannesburg"
    },
    {
    "city": "Johns Island"
    },
    {
    "city": "Johnson City"
    },
    {
    "city": "Joinville"
    },
    {
    "city": "Jonesboro"
    },
    {
    "city": "Juan Griego"
    },
    {
    "city": "Juan-les-Pins"
    },
    {
    "city": "Juba"
    },
    {
    "city": "Juiz de Fora"
    },
    {
    "city": "Juneau"
    },
    {
    "city": "Jungfrau"
    },
    {
    "city": "Jupiter"
    },
    {
    "city": "Jupiter Island"
    },
    {
    "city": "Jūrmala"
    },
    {},
    {
    "city": "Kabul"
    },
    {
    "city": "Kaiserslautern"
    },
    {
    "city": "Kalamata"
    },
    {
    "city": "Kalamazoo"
    },
    {
    "city": "Kamloops"
    },
    {
    "city": "Kampala"
    },
    {
    "city": "Kanchanaburi"
    },
    {
    "city": "Kansas City"
    },
    {
    "city": "Kansas City (Kansas)"
    },
    {
    "city": "Kappl"
    },
    {
    "city": "Kaprun"
    },
    {
    "city": "Islamabad"
    },
    {
    "city": "Karlovy Vary"
    },
    {
    "city": "Karlsruhe"
    },
    {
    "city": "Kassel"
    },
    {
    "city": "Kastoria"
    },
    {
    "city": "Kathmandu"
    },
    {
    "city": "Kaunas"
    },
    {
    "city": "Kavala"
    },
    {
    "city": "Kearney"
    },
    {
    "city": "Keene"
    },
    {
    "city": "Kelowna"
    },
    {
    "city": "Kemer"
    },
    {
    "city": "Kenosha"
    },
    {
    "city": "Key Biscayne"
    },
    {
    "city": "Key Largo"
    },
    {
    "city": "Key West"
    },
    {
    "city": "Khao Lak"
    },
    {
    "city": "Khartoum"
    },
    {
    "city": "Kiawah Island"
    },
    {
    "city": "Kiel"
    },
    {
    "city": "Kigali"
    },
    {
    "city": "Kilkenny"
    },
    {
    "city": "Kill Devil Hills"
    },
    {
    "city": "Kingman"
    },
    {
    "city": "Kingston (Jamaica)"
    },
    {
    "city": "Kingston (Norfolk Island)"
    },
    {
    "city": "Kingston (Canada)"
    },
    {
    "city": "Kingston upon Hull"
    },
    {
    "city": "Kingstown"
    },
    {
    "city": "Kinshasa"
    },
    {
    "city": "Kissimmee"
    },
    {
    "city": "Kitchener"
    },
    {
    "city": "Kitty Hawk"
    },
    {
    "city": "Kitzbühel"
    },
    {
    "city": "Klagenfurt"
    },
    {
    "city": "Klaipėda"
    },
    {
    "city": "Knotts Island"
    },
    {
    "city": "Knoxville"
    },
    {
    "city": "Kobe"
    },
    {
    "city": "Koblenz"
    },
    {
    "city": "Kolding"
    },
    {
    "city": "Kolkata"
    },
    {
    "city": "Komotini"
    },
    {
    "city": "Koper"
    },
    {
    "city": "Koror"
    },
    {
    "city": "Kos"
    },
    {
    "city": "Košice"
    },
    {
    "city": "Kotor"
    },
    {
    "city": "Krabi"
    },
    {
    "city": "Krakow"
    },
    {
    "city": "Kralendijk"
    },
    {
    "city": "Krefeld"
    },
    {
    "city": "Kuah"
    },
    {
    "city": "Kuala Lumpur"
    },
    {
    "city": "Kure Beach"
    },
    {
    "city": "Kuşadası"
    },
    {
    "city": "Kuta"
    },
    {
    "city": "Kutná Hora"
    },
    {
    "city": "Kuwait City"
    },
    {
    "city": "Kyiv"
    },
    {
    "city": "Kyoto"
    },
    {
    "city": "Kyrenia"
    },
    {},
    {
    "city": "La Ceiba"
    },
    {
    "city": "La Ciotat"
    },
    {
    "city": "La Clusaz"
    },
    {
    "city": "La Laguna"
    },
    {
    "city": "La Maddalena"
    },
    {
    "city": "La Manga"
    },
    {
    "city": "La Paz"
    },
    {
    "city": "La Plagne"
    },
    {
    "city": "La Plata"
    },
    {
    "city": "La Rochelle"
    },
    {
    "city": "La Romana"
    },
    {
    "city": "La Serena"
    },
    {
    "city": "La Seyne-sur-Mer"
    },
    {
    "city": "La Spezia"
    },
    {
    "city": "La Thuile"
    },
    {
    "city": "Laax"
    },
    {
    "city": "Labasa"
    },
    {
    "city": "Labrador City"
    },
    {
    "city": "Labuan Bajo"
    },
    {
    "city": "Lady's Island"
    },
    {
    "city": "Ladysmith"
    },
    {
    "city": "Lafayette (Indiana)"
    },
    {
    "city": "Lafayette (Louisiana)"
    },
    {
    "city": "Lagos (Nigeria)"
    },
    {
    "city": "Lagos (Portugal)"
    },
    {
    "city": "Laguna Beach"
    },
    {
    "city": "Karachi"
    },
    {
    "city": "Lakeland"
    },
    {
    "city": "Lalitpur"
    },
    {
    "city": "Lamezia Terme"
    },
    {
    "city": "Lancaster"
    },
    {
    "city": "Lancaster (U.S.)"
    },
    {
    "city": "Landshut"
    },
    {
    "city": "Lansing"
    },
    {
    "city": "L'Aquila"
    },
    {
    "city": "Laredo"
    },
    {
    "city": "Largo"
    },
    {
    "city": "Larnaca"
    },
    {
    "city": "Las Cruces"
    },
    {
    "city": "Las Palmas"
    },
    {
    "city": "Las Vegas"
    },
    {
    "city": "Latina"
    },
    {
    "city": "Laurel Bay"
    },
    {
    "city": "Lausanne"
    },
    {
    "city": "Lautoka"
    },
    {
    "city": "Laval"
    },
    {
    "city": "Lawton"
    },
    {
    "city": "Layton"
    },
    {
    "city": "Le Havre"
    },
    {
    "city": "Le Lavandou"
    },
    {
    "city": "Le Mans"
    },
    {
    "city": "Le Puy-en-Velay"
    },
    {
    "city": "Lecce"
    },
    {
    "city": "Lecco"
    },
    {
    "city": "Lech"
    },
    {
    "city": "Leeds"
    },
    {
    "city": "Legian"
    },
    {
    "city": "Legnano"
    },
    {
    "city": "Leicester"
    },
    {
    "city": "Leiden"
    },
    {
    "city": "Leipzig"
    },
    {
    "city": "Lemgo"
    },
    {
    "city": "Leogang"
    },
    {
    "city": "León"
    },
    {
    "city": "Les Arcs"
    },
    {
    "city": "Les Deux Alpes"
    },
    {
    "city": "Les Gets"
    },
    {
    "city": "Les Houches"
    },
    {
    "city": "Les Menuires"
    },
    {
    "city": "Lethbridge"
    },
    {
    "city": "Leuven"
    },
    {
    "city": "Leverkusen"
    },
    {
    "city": "Lexington"
    },
    {
    "city": "Liberec"
    },
    {
    "city": "Libreville"
    },
    {
    "city": "Lichfield"
    },
    {
    "city": "Lido Beach"
    },
    {
    "city": "Lido Key"
    },
    {
    "city": "Liège"
    },
    {
    "city": "Lienz"
    },
    {
    "city": "Liepāja"
    },
    {
    "city": "Lille"
    },
    {
    "city": "Lilongwe"
    },
    {
    "city": "Lima"
    },
    {
    "city": "Limassol"
    },
    {
    "city": "Limerick"
    },
    {
    "city": "Limoges"
    },
    {
    "city": "Lincoln"
    },
    {
    "city": "Lincoln"
    },
    {
    "city": "Lindos"
    },
    {
    "city": "Linz"
    },
    {
    "city": "Lisbon"
    },
    {
    "city": "Lisburn"
    },
    {
    "city": "Little Rock"
    },
    {
    "city": "Liverpool"
    },
    {
    "city": "Livigno"
    },
    {
    "city": "Livorno"
    },
    {
    "city": "Ljubljana"
    },
    {
    "city": "Lloret de Mar"
    },
    {
    "city": "Llucmajor"
    },
    {
    "city": "Loano"
    },
    {
    "city": "Locarno"
    },
    {
    "city": "Lodi"
    },
    {
    "city": "Lodz"
    },
    {
    "city": "Logan"
    },
    {
    "city": "Logroño"
    },
    {
    "city": "Lomé"
    },
    {
    "city": "London (Canada)"
    },
    {
    "city": "London (UK)"
    },
    {
    "city": "Londrina"
    },
    {
    "city": "Long Beach"
    },
    {
    "city": "Long Beach (New York)"
    },
    {
    "city": "Long Branch"
    },
    {
    "city": "Longboat Key"
    },
    {
    "city": "Longport"
    },
    {
    "city": "Longview (Texas)"
    },
    {
    "city": "Longview (Washington)"
    },
    {
    "city": "Lorain"
    },
    {
    "city": "Los Alamos"
    },
    {
    "city": "Los Angeles"
    },
    {
    "city": "Los Cabos"
    },
    {
    "city": "Los Cristianos"
    },
    {
    "city": "Louisville"
    },
    {
    "city": "Lourdes"
    },
    {
    "city": "Loutraki"
    },
    {
    "city": "Louvain-la-Neuve"
    },
    {
    "city": "Lowell"
    },
    {
    "city": "Luanda"
    },
    {
    "city": "Lubbock"
    },
    {
    "city": "Lübeck"
    },
    {
    "city": "Lublin"
    },
    {
    "city": "Lucca"
    },
    {
    "city": "Lucerne"
    },
    {
    "city": "Lugano"
    },
    {
    "city": "Luganville"
    },
    {
    "city": "Lund"
    },
    {
    "city": "Lusaka"
    },
    {
    "city": "Luxembourg"
    },
    {
    "city": "Luxor"
    },
    {
    "city": "Lyon"
    },
    {},
    {
    "city": "Maastricht"
    },
    {
    "city": "Macerata"
    },
    {
    "city": "Machu Picchu"
    },
    {
    "city": "Macon"
    },
    {
    "city": "Madera"
    },
    {
    "city": "Madison"
    },
    {
    "city": "Madonna di Campiglio"
    },
    {
    "city": "Madrid"
    },
    {
    "city": "Magaluf"
    },
    {
    "city": "Magdeburg"
    },
    {
    "city": "Mahón"
    },
    {
    "city": "Mainz"
    },
    {
    "city": "Majuro"
    },
    {
    "city": "Makarska"
    },
    {
    "city": "Malabo"
    },
    {
    "city": "Malaga"
    },
    {
    "city": "Malang"
    },
    {
    "city": "Maldonado"
    },
    {
    "city": "Malé"
    },
    {
    "city": "Malia"
    },
    {
    "city": "Malibu"
    },
    {
    "city": "Malmö"
    },
    {
    "city": "Manacor"
    },
    {
    "city": "Manado"
    },
    {
    "city": "Managua"
    },
    {
    "city": "Manama"
    },
    {
    "city": "Manchester (UK)"
    },
    {
    "city": "Manchester (U.S.)"
    },
    {
    "city": "Máncora"
    },
    {
    "city": "Mandalika"
    },
    {
    "city": "Manhattan Beach"
    },
    {
    "city": "Manhattan, KS"
    },
    {
    "city": "Manila"
    },
    {
    "city": "Mannheim"
    },
    {
    "city": "Manosque"
    },
    {
    "city": "Manteo"
    },
    {
    "city": "Mantua"
    },
    {
    "city": "Maputo"
    },
    {
    "city": "Mar del Plata"
    },
    {
    "city": "Maracaibo"
    },
    {
    "city": "Marathon"
    },
    {
    "city": "Marbella"
    },
    {
    "city": "Marco Island"
    },
    {
    "city": "Margate City"
    },
    {
    "city": "Maria Alm"
    },
    {
    "city": "Maribor"
    },
    {
    "city": "Marigot"
    },
    {
    "city": "Markham"
    },
    {
    "city": "Marmaris"
    },
    {
    "city": "Maroochydore"
    },
    {
    "city": "Marquette"
    },
    {
    "city": "Marrakesh"
    },
    {
    "city": "Marsa Alam"
    },
    {
    "city": "Marsala"
    },
    {
    "city": "Marseille"
    },
    {
    "city": "Martigues"
    },
    {
    "city": "Masaya"
    },
    {
    "city": "Maseru"
    },
    {
    "city": "Maspalomas"
    },
    {
    "city": "Massa"
    },
    {
    "city": "Mataram"
    },
    {
    "city": "Matera"
    },
    {
    "city": "Mayrhofen"
    },
    {
    "city": "Mazara del Vallo"
    },
    {
    "city": "Mbabane"
    },
    {
    "city": "McKinney"
    },
    {
    "city": "Mechelen"
    },
    {
    "city": "Medan"
    },
    {
    "city": "Medellín"
    },
    {
    "city": "Medford"
    },
    {
    "city": "Megève"
    },
    {
    "city": "Melbourne (Australia)"
    },
    {
    "city": "Melbourne (U.S.)"
    },
    {
    "city": "Memphis"
    },
    {
    "city": "Menton"
    },
    {
    "city": "Merano"
    },
    {
    "city": "Merced"
    },
    {
    "city": "Meribel"
    },
    {
    "city": "Mérida (Spain)"
    },
    {
    "city": "Mérida (Venezuela)"
    },
    {
    "city": "Meridian"
    },
    {
    "city": "Merritt Island"
    },
    {
    "city": "Mesa"
    },
    {
    "city": "Messina"
    },
    {
    "city": "Mestre"
    },
    {
    "city": "Metz"
    },
    {
    "city": "Mexico City"
    },
    {
    "city": "Miami"
    },
    {
    "city": "Middelburg"
    },
    {
    "city": "Midland"
    },
    {
    "city": "Mijas"
    },
    {
    "city": "Milan"
    },
    {
    "city": "Milford"
    },
    {
    "city": "Millau"
    },
    {
    "city": "Milwaukee"
    },
    {
    "city": "Mindelo"
    },
    {
    "city": "Minneapolis"
    },
    {
    "city": "Minot"
    },
    {
    "city": "Minsk"
    },
    {
    "city": "Miramar"
    },
    {
    "city": "Mishawaka"
    },
    {
    "city": "Mississauga"
    },
    {
    "city": "Missoula"
    },
    {
    "city": "Moab"
    },
    {
    "city": "Mobile"
    },
    {
    "city": "Modena"
    },
    {
    "city": "Modesto"
    },
    {
    "city": "Modica"
    },
    {
    "city": "Moena"
    },
    {
    "city": "Mogadishu"
    },
    {
    "city": "Mogi das Cruzes"
    },
    {
    "city": "Mombasa"
    },
    {
    "city": "Monaco City"
    },
    {
    "city": "Mönchengladbach"
    },
    {
    "city": "Moncton"
    },
    {
    "city": "Monrovia (Liberia)"
    },
    {
    "city": "Monrovia (U.S.)"
    },
    {
    "city": "Mons"
    },
    {
    "city": "Monschau"
    },
    {
    "city": "Montauk"
    },
    {
    "city": "Monte Carlo"
    },
    {
    "city": "Monte Rosa"
    },
    {
    "city": "Montego Bay"
    },
    {
    "city": "Montepulciano"
    },
    {
    "city": "Monterey"
    },
    {
    "city": "Montevideo"
    },
    {
    "city": "Montgomery"
    },
    {
    "city": "Montluçon"
    },
    {
    "city": "Montpelier"
    },
    {
    "city": "Montpellier"
    },
    {
    "city": "Montreal"
    },
    {
    "city": "Montreux"
    },
    {
    "city": "Monza"
    },
    {
    "city": "Moose Jaw"
    },
    {
    "city": "Moraira"
    },
    {
    "city": "Moreno Valley"
    },
    {
    "city": "Morgantown"
    },
    {
    "city": "Moroni"
    },
    {
    "city": "Morro Bay"
    },
    {
    "city": "Morzine"
    },
    {
    "city": "Moscow"
    },
    {
    "city": "Mount Vernon"
    },
    {
    "city": "Mountain View"
    },
    {
    "city": "Moutier"
    },
    {
    "city": "Mulhouse"
    },
    {
    "city": "Mumbai"
    },
    {
    "city": "Munich"
    },
    {
    "city": "Münster"
    },
    {
    "city": "Murcia"
    },
    {
    "city": "Murfreesboro"
    },
    {
    "city": "Murter"
    },
    {
    "city": "Mykonos"
    },
    {
    "city": "Mytilene"
    },
    {},
    {
    "city": "Nadi"
    },
    {
    "city": "Nafplio"
    },
    {
    "city": "Nagoya"
    },
    {
    "city": "Nags Head"
    },
    {
    "city": "Nairobi"
    },
    {
    "city": "Namur"
    },
    {
    "city": "Nanaimo"
    },
    {
    "city": "Nancy"
    },
    {
    "city": "Nantes"
    },
    {
    "city": "Napa"
    },
    {
    "city": "Naples (Italy)"
    },
    {
    "city": "Naples (U.S.)"
    },
    {
    "city": "Narbonne"
    },
    {
    "city": "Narva"
    },
    {
    "city": "Nashua"
    },
    {
    "city": "Nashville"
    },
    {
    "city": "Nassau"
    },
    {
    "city": "Navarre Beach"
    },
    {
    "city": "Naxos"
    },
    {
    "city": "Nazareth"
    },
    {
    "city": "N'Djamena"
    },
    {
    "city": "Negril"
    },
    {
    "city": "Neiafu"
    },
    {
    "city": "Nelson"
    },
    {
    "city": "Nerja"
    },
    {
    "city": "Netanya"
    },
    {
    "city": "Nevers"
    },
    {
    "city": "New Haven"
    },
    {
    "city": "New London"
    },
    {
    "city": "New Orleans"
    },
    {
    "city": "New Smyrna Beach"
    },
    {
    "city": "New York City"
    },
    {
    "city": "Newark"
    },
    {
    "city": "Newcastle (Australia)"
    },
    {
    "city": "Newcastle (UK)"
    },
    {
    "city": "Newport (UK)"
    },
    {
    "city": "Newport (Rhode Island)"
    },
    {
    "city": "Newport (Vermont)"
    },
    {
    "city": "Newport Beach"
    },
    {
    "city": "Newport News"
    },
    {
    "city": "Newry"
    },
    {
    "city": "Ngerulmud"
    },
    {
    "city": "Nha Trang"
    },
    {
    "city": "Niagara Falls (U.S.)"
    },
    {
    "city": "Niagara Falls (Canada)"
    },
    {
    "city": "Niamey"
    },
    {
    "city": "Nice"
    },
    {
    "city": "Nicosia"
    },
    {
    "city": "Nijmegen"
    },
    {
    "city": "Nimes"
    },
    {
    "city": "Niort"
    },
    {
    "city": "Noosa Heads"
    },
    {
    "city": "Norfolk"
    },
    {
    "city": "Normal"
    },
    {
    "city": "Norman"
    },
    {
    "city": "North Captiva Island"
    },
    {
    "city": "North Las Vegas"
    },
    {
    "city": "North Port"
    },
    {
    "city": "North Topsail Beach"
    },
    {
    "city": "North Wildwood"
    },
    {
    "city": "Norwalk"
    },
    {
    "city": "Norwich"
    },
    {
    "city": "Nottingham"
    },
    {
    "city": "Nouakchott"
    },
    {
    "city": "Novara"
    },
    {
    "city": "Novigrad"
    },
    {
    "city": "Nukuʻalofa"
    },
    {
    "city": "Nukunonu"
    },
    {
    "city": "Nuoro"
    },
    {
    "city": "Nürnberg"
    },
    {
    "city": "Nur-Sultan"
    },
    {
    "city": "Nusa Dua"
    },
    {
    "city": "Nuuk"
    },
    {
    "city": "Nyon"
    },
    {},
    {
    "city": "Oak Island"
    },
    {
    "city": "Oakland"
    },
    {
    "city": "Oakville"
    },
    {
    "city": "Oaxaca"
    },
    {
    "city": "Obergurgl"
    },
    {
    "city": "Oberhausen"
    },
    {
    "city": "Ocala"
    },
    {
    "city": "Ocean City"
    },
    {
    "city": "Ocean Grove"
    },
    {
    "city": "Ocean Isle Beach"
    },
    {
    "city": "Oceanside"
    },
    {
    "city": "Ocho Rios"
    },
    {
    "city": "Ocracoke Island"
    },
    {
    "city": "Odense"
    },
    {
    "city": "Odessa"
    },
    {
    "city": "Ogden"
    },
    {
    "city": "Oia"
    },
    {
    "city": "Okaloosa Island"
    },
    {
    "city": "Oklahoma City"
    },
    {
    "city": "Olbia"
    },
    {
    "city": "Oldenburg"
    },
    {
    "city": "Olomouc"
    },
    {
    "city": "Olympia"
    },
    {
    "city": "Omaha"
    },
    {
    "city": "Omoa"
    },
    {
    "city": "Opatija"
    },
    {
    "city": "Orange Beach"
    },
    {
    "city": "Oranjestad (Aruba)"
    },
    {
    "city": "Oranjestad (Sint Eustatius)"
    },
    {
    "city": "Orem"
    },
    {
    "city": "Oristano"
    },
    {
    "city": "Orlando"
    },
    {
    "city": "Orléans"
    },
    {
    "city": "Ortisei"
    },
    {
    "city": "Osaka"
    },
    {
    "city": "Oshawa"
    },
    {
    "city": "Oshkosh"
    },
    {
    "city": "Oslo"
    },
    {
    "city": "Osnabrück"
    },
    {
    "city": "Ostrava"
    },
    {
    "city": "Ottawa"
    },
    {
    "city": "Ouagadougou"
    },
    {
    "city": "Oulu"
    },
    {
    "city": "Ourense"
    },
    {
    "city": "Overland Park"
    },
    {
    "city": "Oviedo"
    },
    {
    "city": "Owensboro"
    },
    {
    "city": "Oxford"
    },
    {
    "city": "Oxnard"
    },
    {},
    {
    "city": "Pacific Grove"
    },
    {
    "city": "Padang"
    },
    {
    "city": "Paderborn"
    },
    {
    "city": "Padova"
    },
    {
    "city": "Pago Pago"
    },
    {
    "city": "Palanga"
    },
    {
    "city": "Palavas-les-Flots"
    },
    {
    "city": "Palembang"
    },
    {
    "city": "Palermo"
    },
    {
    "city": "Palikir"
    },
    {
    "city": "Palm Bay"
    },
    {
    "city": "Palm Beach"
    },
    {
    "city": "Palm Springs"
    },
    {
    "city": "Palma de Mallorca"
    },
    {
    "city": "Palma Nova"
    },
    {
    "city": "Palmetto"
    },
    {
    "city": "Palmetto Dunes"
    },
    {
    "city": "Palo Alto"
    },
    {
    "city": "Pamplona"
    },
    {
    "city": "Panama City (U.S.)"
    },
    {
    "city": "Panama City (Panama)"
    },
    {
    "city": "Paphos"
    },
    {
    "city": "Paradiski"
    },
    {
    "city": "Paralia"
    },
    {
    "city": "Paramaribo"
    },
    {
    "city": "Parikia"
    },
    {
    "city": "Paris"
    },
    {
    "city": "Parkersburg"
    },
    {
    "city": "Parksville"
    },
    {
    "city": "Parma"
    },
    {
    "city": "Pärnu"
    },
    {
    "city": "Parris Island"
    },
    {
    "city": "Pasadena"
    },
    {
    "city": "Passo del Tonale"
    },
    {
    "city": "Passo Rolle"
    },
    {
    "city": "Paterson"
    },
    {
    "city": "Patras"
    },
    {
    "city": "Pattaya"
    },
    {
    "city": "Pau"
    },
    {
    "city": "Pavia"
    },
    {
    "city": "Pawleys Island"
    },
    {
    "city": "Peel"
    },
    {
    "city": "Peguera"
    },
    {
    "city": "Pembroke Pines"
    },
    {
    "city": "Peniscola"
    },
    {
    "city": "Pensacola"
    },
    {
    "city": "Pensacola Beach"
    },
    {
    "city": "Peoria"
    },
    {
    "city": "Perast"
    },
    {
    "city": "Perdido Key"
    },
    {
    "city": "Périgueux"
    },
    {
    "city": "Perpignan"
    },
    {
    "city": "Perros-Guirec"
    },
    {
    "city": "Perth (Australia)"
    },
    {
    "city": "Perth (UK)"
    },
    {
    "city": "Perugia"
    },
    {
    "city": "Pesaro"
    },
    {
    "city": "Pescara"
    },
    {
    "city": "Pescasseroli"
    },
    {
    "city": "Petah Tikva"
    },
    {
    "city": "Peterborough"
    },
    {
    "city": "Petra"
    },
    {
    "city": "Petrovac"
    },
    {
    "city": "Pforzheim"
    },
    {
    "city": "Phang Nga"
    },
    {
    "city": "Phetchabun"
    },
    {
    "city": "Philadelphia"
    },
    {
    "city": "Philipsburg"
    },
    {
    "city": "Phoenix"
    },
    {
    "city": "Phuket City"
    },
    {
    "city": "Piacenza"
    },
    {
    "city": "Pierre"
    },
    {
    "city": "Pine Bluff"
    },
    {
    "city": "Pine Knoll Shores"
    },
    {
    "city": "Piraeus"
    },
    {
    "city": "Piran"
    },
    {
    "city": "Pisa"
    },
    {
    "city": "Pistoia"
    },
    {
    "city": "Pittsburgh"
    },
    {
    "city": "Placencia"
    },
    {
    "city": "Plano"
    },
    {
    "city": "Playa Blanca"
    },
    {
    "city": "Playa de las Américas"
    },
    {
    "city": "Playa del Carmen"
    },
    {
    "city": "Pleasure Point"
    },
    {
    "city": "Plovdiv"
    },
    {
    "city": "Plymouth"
    },
    {
    "city": "Plzeň"
    },
    {
    "city": "Podgorica"
    },
    {
    "city": "Point Lookout"
    },
    {
    "city": "Pointe-à-Pitre"
    },
    {
    "city": "Poitiers"
    },
    {
    "city": "Pollença"
    },
    {
    "city": "Pompano Beach"
    },
    {
    "city": "Pontevedra"
    },
    {
    "city": "Pordenone"
    },
    {
    "city": "Poreč"
    },
    {
    "city": "Porlamar"
    },
    {
    "city": "Port Alberni"
    },
    {
    "city": "Port Angeles"
    },
    {
    "city": "Port Charlotte"
    },
    {
    "city": "Port d'Andratx"
    },
    {
    "city": "Port Louis"
    },
    {
    "city": "Port Moresby"
    },
    {
    "city": "Port of Spain"
    },
    {
    "city": "Port Royal Town"
    },
    {
    "city": "Port St. Lucie"
    },
    {
    "city": "Port Townsend"
    },
    {
    "city": "Port Vila"
    },
    {
    "city": "Port-au-Prince"
    },
    {
    "city": "Portimão"
    },
    {
    "city": "Portland (Oregon)"
    },
    {
    "city": "Portland (Maine)"
    },
    {
    "city": "Porto"
    },
    {
    "city": "Porto Cervo"
    },
    {
    "city": "Porto Cristo"
    },
    {
    "city": "Porto Torres"
    },
    {
    "city": "Portocolom"
    },
    {
    "city": "Portoferraio"
    },
    {
    "city": "Portofino"
    },
    {
    "city": "Porto-Novo"
    },
    {
    "city": "Portorož"
    },
    {
    "city": "Porto-Vecchio"
    },
    {
    "city": "Portsmouth (UK)"
    },
    {
    "city": "Portsmouth (U.S.)"
    },
    {
    "city": "Portsmouth Island"
    },
    {
    "city": "Positano"
    },
    {
    "city": "Potenza"
    },
    {
    "city": "Potsdam"
    },
    {
    "city": "Poznan"
    },
    {
    "city": "Pozzuoli"
    },
    {
    "city": "Prague"
    },
    {
    "city": "Praia"
    },
    {
    "city": "Praia da Rocha"
    },
    {
    "city": "Prato"
    },
    {
    "city": "Prescott"
    },
    {
    "city": "Preston"
    },
    {
    "city": "Pretoria"
    },
    {
    "city": "Prince Albert"
    },
    {
    "city": "Prince George"
    },
    {
    "city": "Prince Rupert"
    },
    {
    "city": "Pristina"
    },
    {
    "city": "Propriano"
    },
    {
    "city": "Protaras"
    },
    {
    "city": "Providence"
    },
    {
    "city": "Provincetown"
    },
    {
    "city": "Provo"
    },
    {
    "city": "Pueblo"
    },
    {
    "city": "Puerto Baquerizo Moreno"
    },
    {
    "city": "Puerto Cortés"
    },
    {
    "city": "Puerto de la Cruz"
    },
    {
    "city": "Puerto la Cruz"
    },
    {
    "city": "Puerto Plata"
    },
    {
    "city": "Puerto Princesa"
    },
    {
    "city": "Puerto Rico de Gran Canaria"
    },
    {
    "city": "Puerto Vallarta"
    },
    {
    "city": "Pula"
    },
    {
    "city": "Punta Arenas"
    },
    {
    "city": "Punta Cana"
    },
    {
    "city": "Punta del Este"
    },
    {
    "city": "Punta Gorda"
    },
    {
    "city": "Pyeongchang"
    },
    {
    "city": "Pyongyang"
    },
    {},
    {
    "city": "Quarteira"
    },
    {
    "city": "Quebec"
    },
    {
    "city": "Quetzaltenango"
    },
    {
    "city": "Quezon City"
    },
    {
    "city": "Quimper"
    },
    {
    "city": "Quito"
    },
    {
    "city": "Quogue"
    },
    {},
    {
    "city": "Rabat"
    },
    {
    "city": "Racine"
    },
    {
    "city": "Ragusa"
    },
    {
    "city": "Railay Beach"
    },
    {
    "city": "Raleigh"
    },
    {
    "city": "Ramallah"
    },
    {
    "city": "Ramsey"
    },
    {
    "city": "Rancho Cucamonga"
    },
    {
    "city": "Randers"
    },
    {
    "city": "Rapallo"
    },
    {
    "city": "Rapid City"
    },
    {
    "city": "Ras al-Khaimah"
    },
    {
    "city": "Ras Sedr"
    },
    {
    "city": "Ratingen"
    },
    {
    "city": "Ravello"
    },
    {
    "city": "Ravenna"
    },
    {
    "city": "Rayong"
    },
    {
    "city": "Reading"
    },
    {
    "city": "Red Deer"
    },
    {
    "city": "Redding"
    },
    {
    "city": "Redondo Beach"
    },
    {
    "city": "Regensburg"
    },
    {
    "city": "Reggio Calabria"
    },
    {
    "city": "Reggio Emilia"
    },
    {
    "city": "Regina"
    },
    {
    "city": "Rehovot"
    },
    {
    "city": "Reims"
    },
    {
    "city": "Rennes"
    },
    {
    "city": "Reno"
    },
    {
    "city": "Rethymno"
    },
    {
    "city": "Reus"
    },
    {
    "city": "Reutlingen"
    },
    {
    "city": "Reykjavik"
    },
    {
    "city": "Rhodes"
    },
    {
    "city": "Richmond"
    },
    {
    "city": "Rieti"
    },
    {
    "city": "Riga"
    },
    {
    "city": "Rijeka"
    },
    {
    "city": "Rimini"
    },
    {
    "city": "Rio de Janeiro"
    },
    {
    "city": "Riomaggiore"
    },
    {
    "city": "Rishon LeZion"
    },
    {
    "city": "Rivas"
    },
    {
    "city": "Riverside"
    },
    {
    "city": "Riviera Maya"
    },
    {
    "city": "Road Town"
    },
    {
    "city": "Roanoke"
    },
    {
    "city": "Rocamadour"
    },
    {
    "city": "Rochester (Minnesota)"
    },
    {
    "city": "Rochester (New York)"
    },
    {
    "city": "Rock Hill"
    },
    {
    "city": "Rockford"
    },
    {
    "city": "Rockville (Maryland)"
    },
    {
    "city": "Rockville (South Carolina)"
    },
    {
    "city": "Rodanthe"
    },
    {
    "city": "Rodez"
    },
    {
    "city": "Rogers"
    },
    {
    "city": "Rome"
    },
    {
    "city": "Ronda"
    },
    {
    "city": "Rosario"
    },
    {
    "city": "Roseau"
    },
    {
    "city": "Roskilde"
    },
    {
    "city": "Rostock"
    },
    {
    "city": "Roswell"
    },
    {
    "city": "Rotterdam"
    },
    {
    "city": "Roubaix"
    },
    {
    "city": "Rouen"
    },
    {
    "city": "Rovigo"
    },
    {
    "city": "Rovinj"
    },
    {
    "city": "Rutland"
    },
    {},
    {
    "city": "Sa Coma"
    },
    {
    "city": "Sa Pobla"
    },
    {
    "city": "Saalbach"
    },
    {
    "city": "Saarbrücken"
    },
    {
    "city": "Saas-Fee"
    },
    {
    "city": "Sacramento"
    },
    {
    "city": "Safaga"
    },
    {
    "city": "Sag Harbor"
    },
    {
    "city": "Sagaponack"
    },
    {
    "city": "Saguenay"
    },
    {
    "city": "Saint John"
    },
    {
    "city": "Saint Paul"
    },
    {
    "city": "Saint Petersburg"
    },
    {
    "city": "Saint-Brieuc"
    },
    {
    "city": "Sainte-Maxime"
    },
    {
    "city": "Saintes-Maries-de-la-Mer"
    },
    {
    "city": "Saint-Étienne"
    },
    {
    "city": "Saint-Jean-Cap-Ferrat"
    },
    {
    "city": "Saint-Jean-sur-Richelieu"
    },
    {
    "city": "Saint-Jérôme"
    },
    {
    "city": "Saint-Laurent-du-Maroni"
    },
    {
    "city": "Saint-Malo"
    },
    {
    "city": "Saint-Tropez"
    },
    {
    "city": "Salamanca"
    },
    {
    "city": "Salem (Oregon)"
    },
    {
    "city": "Salem (Massachusetts)"
    },
    {
    "city": "Salerno"
    },
    {
    "city": "Salinas"
    },
    {
    "city": "Salisbury"
    },
    {
    "city": "Salou"
    },
    {
    "city": "Salt Lake City"
    },
    {
    "city": "Salta"
    },
    {
    "city": "Salter Path"
    },
    {
    "city": "Salvador"
    },
    {
    "city": "Salvo"
    },
    {
    "city": "Salzburg"
    },
    {
    "city": "Samaná"
    },
    {
    "city": "San Angelo"
    },
    {
    "city": "San Antonio"
    },
    {
    "city": "San Bernardino"
    },
    {
    "city": "San Clemente"
    },
    {
    "city": "San Cristóbal"
    },
    {
    "city": "San Diego"
    },
    {
    "city": "San Fernando"
    },
    {
    "city": "San Francisco"
    },
    {
    "city": "San José (Costa Rica)"
    },
    {
    "city": "San Jose (U.S.)"
    },
    {
    "city": "San Juan"
    },
    {
    "city": "San Juan del Sur"
    },
    {
    "city": "San Lorenzo"
    },
    {
    "city": "San Luis Obispo"
    },
    {
    "city": "San Marino"
    },
    {
    "city": "San Mateo"
    },
    {
    "city": "San Miguel"
    },
    {
    "city": "San Pedro"
    },
    {
    "city": "San Pedro de Atacama"
    },
    {
    "city": "San Pedro Sula"
    },
    {
    "city": "San Rafael"
    },
    {
    "city": "San Salvador"
    },
    {
    "city": "San Sebastián"
    },
    {
    "city": "Sanaa"
    },
    {
    "city": "Sandbridge"
    },
    {
    "city": "Sanford"
    },
    {
    "city": "Sanibel Island"
    },
    {
    "city": "Sanremo"
    },
    {
    "city": "Sant Antoni de Portmany"
    },
    {
    "city": "Santa Ana (U.S.)"
    },
    {
    "city": "Santa Ana (El Salvador)"
    },
    {
    "city": "Santa Barbara"
    },
    {
    "city": "Santa Clara"
    },
    {
    "city": "Santa Clarita"
    },
    {
    "city": "Santa Cruz"
    },
    {
    "city": "Santa Cruz de la Sierra"
    },
    {
    "city": "Santa Cruz de Tenerife"
    },
    {
    "city": "Santa Eulària des Riu"
    },
    {
    "city": "Santa Fe"
    },
    {
    "city": "Santa Lucía"
    },
    {
    "city": "Santa Margherita Ligure"
    },
    {
    "city": "Santa Maria (Cape Verde)"
    },
    {
    "city": "Santa Maria (U.S.)"
    },
    {
    "city": "Santa Monica"
    },
    {
    "city": "Santa Pola"
    },
    {
    "city": "Santa Ponsa"
    },
    {
    "city": "Santa Rosa"
    },
    {
    "city": "Santa Tecla"
    },
    {
    "city": "Santander"
    },
    {
    "city": "Santanyí"
    },
    {
    "city": "Santiago (Chile)"
    },
    {
    "city": "Santiago (Dominican Rep.)"
    },
    {
    "city": "Santiago de Compostela"
    },
    {
    "city": "Santo Domingo"
    },
    {
    "city": "Sanur"
    },
    {
    "city": "Sao Paulo"
    },
    {
    "city": "São Tomé"
    },
    {
    "city": "Sapporo"
    },
    {
    "city": "Sarajevo"
    },
    {
    "city": "Sarasota"
    },
    {
    "city": "Saratoga Springs"
    },
    {
    "city": "S'Arenal"
    },
    {
    "city": "Sariaya"
    },
    {
    "city": "Sarlat-la-Canéda"
    },
    {
    "city": "Saskatoon"
    },
    {
    "city": "Sassari"
    },
    {
    "city": "Sault Ste. Marie"
    },
    {
    "city": "Saumur"
    },
    {
    "city": "Savannah"
    },
    {
    "city": "Savona"
    },
    {
    "city": "Savusavu"
    },
    {
    "city": "Schaffhausen"
    },
    {
    "city": "Schenectady"
    },
    {
    "city": "Schladming"
    },
    {
    "city": "Scottsdale"
    },
    {
    "city": "Scranton"
    },
    {
    "city": "Sea Island"
    },
    {
    "city": "Sea Isle City"
    },
    {
    "city": "Seabrook Island"
    },
    {
    "city": "Seal Beach"
    },
    {
    "city": "Seaside"
    },
    {
    "city": "Seattle"
    },
    {
    "city": "Sedona"
    },
    {
    "city": "Seefeld"
    },
    {
    "city": "Segovia"
    },
    {
    "city": "Semarang"
    },
    {
    "city": "Seminyak"
    },
    {
    "city": "Seoul"
    },
    {
    "city": "Serre Chevalier"
    },
    {
    "city": "Sète"
    },
    {
    "city": "Seville"
    },
    {
    "city": "Shanghai"
    },
    {
    "city": "Sharjah"
    },
    {
    "city": "Sharm el-Sheikh"
    },
    {
    "city": "Sheffield"
    },
    {
    "city": "Shell Point"
    },
    {
    "city": "Shelter Cove"
    },
    {
    "city": "Shenzhen"
    },
    {
    "city": "Sherbrooke"
    },
    {
    "city": "Shinnecock Hills"
    },
    {
    "city": "Ship Bottom"
    },
    {
    "city": "Shreveport"
    },
    {
    "city": "Šiauliai"
    },
    {
    "city": "Šibenik"
    },
    {
    "city": "Side"
    },
    {
    "city": "Siegen"
    },
    {
    "city": "Siena"
    },
    {
    "city": "Siesta Key"
    },
    {
    "city": "Sineu"
    },
    {
    "city": "Singapore"
    },
    {
    "city": "Singaraja"
    },
    {
    "city": "Sion"
    },
    {
    "city": "Sioux City"
    },
    {
    "city": "Sioux Falls"
    },
    {
    "city": "Sitges"
    },
    {
    "city": "Skiathos"
    },
    {
    "city": "Skopje"
    },
    {
    "city": "Sofia"
    },
    {
    "city": "Sölden"
    },
    {
    "city": "Söll"
    },
    {
    "city": "Soller"
    },
    {
    "city": "Solothurn"
    },
    {
    "city": "Sondrio"
    },
    {
    "city": "Sopot"
    },
    {
    "city": "Sorocaba"
    },
    {
    "city": "Sorrento"
    },
    {
    "city": "South Beach"
    },
    {
    "city": "South Bend"
    },
    {
    "city": "Southampton (UK)"
    },
    {
    "city": "Southampton (New York)"
    },
    {
    "city": "Southern Shores"
    },
    {
    "city": "Split"
    },
    {
    "city": "Spokane"
    },
    {
    "city": "Springdale"
    },
    {
    "city": "Springfield (Illinois)"
    },
    {
    "city": "Springfield (Massachusetts)"
    },
    {
    "city": "Springfield (Missouri)"
    },
    {
    "city": "Springfield (Oregon)"
    },
    {
    "city": "Springs"
    },
    {
    "city": "St Albans"
    },
    {
    "city": "St George's (Bermuda)"
    },
    {
    "city": "St Pete Beach"
    },
    {
    "city": "St. Albans"
    },
    {
    "city": "St. Anton"
    },
    {
    "city": "St. Augustine"
    },
    {
    "city": "St. Catharines"
    },
    {
    "city": "St. Cloud"
    },
    {
    "city": "St. Gallen"
    },
    {
    "city": "St. George"
    },
    {
    "city": "St. George Island"
    },
    {
    "city": "St. George's (Grenada)"
    },
    {
    "city": "St. John's (Antigua and Barbuda)"
    },
    {
    "city": "St. John's (Canada)"
    },
    {
    "city": "St. Louis"
    },
    {
    "city": "St. Moritz"
    },
    {
    "city": "St. Petersburg (U.S.)"
    },
    {
    "city": "St. Simons Island"
    },
    {
    "city": "Stamford"
    },
    {
    "city": "Stanley"
    },
    {
    "city": "Stavanger"
    },
    {
    "city": "Steinbach"
    },
    {
    "city": "Stillwater"
    },
    {
    "city": "Stirling"
    },
    {
    "city": "Stock Island"
    },
    {
    "city": "Stockholm"
    },
    {
    "city": "Stockton"
    },
    {
    "city": "Stoke-on-Trent"
    },
    {
    "city": "Stone Harbor"
    },
    {
    "city": "Strasbourg"
    },
    {
    "city": "Strathmere"
    },
    {
    "city": "Stuttgart"
    },
    {
    "city": "Sucre"
    },
    {
    "city": "Sudbury"
    },
    {
    "city": "Suez"
    },
    {
    "city": "Sukhothai"
    },
    {
    "city": "Sukhumi"
    },
    {
    "city": "Sullivan's Island"
    },
    {
    "city": "Summerside"
    },
    {
    "city": "Sumter"
    },
    {
    "city": "Sunderland"
    },
    {
    "city": "Sunnyvale"
    },
    {
    "city": "Sunset Beach"
    },
    {
    "city": "Sunshine Coast"
    },
    {
    "city": "Superior"
    },
    {
    "city": "Surabaya"
    },
    {
    "city": "Surf City (New Jersey)"
    },
    {
    "city": "Surf City (North Carolina)"
    },
    {
    "city": "Surrey"
    },
    {
    "city": "Suva"
    },
    {
    "city": "Sveti Stefan"
    },
    {
    "city": "Swansea"
    },
    {
    "city": "Sydney (Australia)"
    },
    {
    "city": "Sydney (Canada)"
    },
    {
    "city": "Syracuse (Italy)"
    },
    {
    "city": "Syracuse (U.S.)"
    },
    {
    "city": "Szczecin"
    },
    {},
    {
    "city": "Taba"
    },
    {
    "city": "Tacloban"
    },
    {
    "city": "Tacoma"
    },
    {
    "city": "Tagbilaran"
    },
    {
    "city": "Taipei"
    },
    {
    "city": "Tallahassee"
    },
    {
    "city": "Tallinn"
    },
    {
    "city": "Tampa"
    },
    {
    "city": "Tampere"
    },
    {
    "city": "Tamworth"
    },
    {
    "city": "Tangier"
    },
    {
    "city": "Taormina"
    },
    {
    "city": "Taranto"
    },
    {
    "city": "Tarifa"
    },
    {
    "city": "Tarragona"
    },
    {
    "city": "Tartu"
    },
    {
    "city": "Tashkent"
    },
    {
    "city": "Tauplitz"
    },
    {
    "city": "Tauranga"
    },
    {
    "city": "Tavira"
    },
    {
    "city": "Tbilisi"
    },
    {
    "city": "Tegucigalpa"
    },
    {
    "city": "Tel Aviv"
    },
    {
    "city": "Temecula"
    },
    {
    "city": "Tempe"
    },
    {
    "city": "Teramo"
    },
    {
    "city": "Ternate"
    },
    {
    "city": "Terni"
    },
    {
    "city": "Texarkana AR"
    },
    {
    "city": "Texarkana TX"
    },
    {
    "city": "The Bottom"
    },
    {
    "city": "The Hague"
    },
    {
    "city": "The Valley"
    },
    {
    "city": "The Wildwoods"
    },
    {
    "city": "The Woodlands"
    },
    {
    "city": "Thessaloniki"
    },
    {
    "city": "Thimphu"
    },
    {
    "city": "Thunder Bay"
    },
    {
    "city": "Tignes"
    },
    {
    "city": "Tijuana"
    },
    {
    "city": "Tilburg"
    },
    {
    "city": "Timmins"
    },
    {
    "city": "Tinos"
    },
    {
    "city": "Tirana"
    },
    {
    "city": "Tivat"
    },
    {
    "city": "Tivoli"
    },
    {
    "city": "Tokyo"
    },
    {
    "city": "Toledo (Spain)"
    },
    {
    "city": "Toledo (U.S.)"
    },
    {
    "city": "Tooele"
    },
    {
    "city": "Toowoomba"
    },
    {
    "city": "Topeka"
    },
    {
    "city": "Topsail Beach"
    },
    {
    "city": "Toronto"
    },
    {
    "city": "Torre del Greco"
    },
    {
    "city": "Torre del Mar"
    },
    {
    "city": "Torremolinos"
    },
    {
    "city": "Torrevieja"
    },
    {
    "city": "Tórshavn"
    },
    {
    "city": "Toruń"
    },
    {
    "city": "Tossa de Mar"
    },
    {
    "city": "Toulon"
    },
    {
    "city": "Toulouse"
    },
    {
    "city": "Tours"
    },
    {
    "city": "Townsville"
    },
    {
    "city": "Trani"
    },
    {
    "city": "Trapani"
    },
    {
    "city": "Treasure Island"
    },
    {
    "city": "Trento"
    },
    {
    "city": "Trenton"
    },
    {
    "city": "Treviso"
    },
    {
    "city": "Trier"
    },
    {
    "city": "Trieste"
    },
    {
    "city": "Tripoli"
    },
    {
    "city": "Trogir"
    },
    {
    "city": "Trois-Rivières"
    },
    {
    "city": "Tromsø"
    },
    {
    "city": "Trondheim"
    },
    {
    "city": "Trouville-sur-Mer"
    },
    {
    "city": "Troy"
    },
    {
    "city": "Troyes"
    },
    {
    "city": "Trujillo"
    },
    {
    "city": "Tucson"
    },
    {
    "city": "Tui"
    },
    {
    "city": "Tulsa"
    },
    {
    "city": "Tulum"
    },
    {
    "city": "Turin"
    },
    {
    "city": "Turku"
    },
    {
    "city": "Tuscaloosa"
    },
    {
    "city": "Twin Falls"
    },
    {
    "city": "Two Harbors"
    },
    {
    "city": "Tybee Island"
    },
    {
    "city": "Tyler"
    },
    {},
    {
    "city": "Ubud"
    },
    {
    "city": "Udine"
    },
    {
    "city": "Udon Thani"
    },
    {
    "city": "Ukiah"
    },
    {
    "city": "Ulaanbaatar"
    },
    {
    "city": "Ulcinj"
    },
    {
    "city": "Ulm"
    },
    {
    "city": "Umag"
    },
    {
    "city": "Uppsala"
    },
    {
    "city": "Urbino"
    },
    {
    "city": "Urubamba"
    },
    {
    "city": "Ushuaia"
    },
    {
    "city": "Utica"
    },
    {
    "city": "Utrecht"
    },
    {},
    {
    "city": "Vaduz"
    },
    {
    "city": "Val d’Isère"
    },
    {
    "city": "Val di Fassa"
    },
    {
    "city": "Val Gardena"
    },
    {
    "city": "Val Thorens"
    },
    {
    "city": "Valence"
    },
    {
    "city": "Valencia (Spain)"
    },
    {
    "city": "Valencia (Venezuela)"
    },
    {
    "city": "Valladolid"
    },
    {
    "city": "Valldemossa"
    },
    {
    "city": "Valle Isarco"
    },
    {
    "city": "Valletta"
    },
    {
    "city": "Valparaíso"
    },
    {
    "city": "Vancouver (Canada)"
    },
    {
    "city": "Vancouver (U.S.)"
    },
    {
    "city": "Varazze"
    },
    {
    "city": "Varese"
    },
    {
    "city": "Varna"
    },
    {
    "city": "Vaughan"
    },
    {
    "city": "Vejle"
    },
    {
    "city": "Venice (Italy)"
    },
    {
    "city": "Venice (U.S.)"
    },
    {
    "city": "Ventimiglia"
    },
    {
    "city": "Ventnor City"
    },
    {
    "city": "Ventspils"
    },
    {
    "city": "Ventura"
    },
    {
    "city": "Verbania"
    },
    {
    "city": "Verbier"
    },
    {
    "city": "Vercelli"
    },
    {
    "city": "Vero Beach"
    },
    {
    "city": "Verona"
    },
    {
    "city": "Versailles"
    },
    {
    "city": "Vevey"
    },
    {
    "city": "Viareggio"
    },
    {
    "city": "Vibo Valentia"
    },
    {
    "city": "Viborg"
    },
    {
    "city": "Vicenza"
    },
    {
    "city": "Vichy"
    },
    {
    "city": "Victoria (Canada)"
    },
    {
    "city": "Victoria (Seychelles)"
    },
    {
    "city": "Victorville"
    },
    {
    "city": "Vienna"
    },
    {
    "city": "Vigan"
    },
    {
    "city": "Vigo"
    },
    {
    "city": "Vilamoura"
    },
    {
    "city": "Villach"
    },
    {
    "city": "Villefranche-sur-Mer"
    },
    {
    "city": "Vilnius"
    },
    {
    "city": "Viña del Mar"
    },
    {
    "city": "Virginia Beach"
    },
    {
    "city": "Visalia"
    },
    {
    "city": "Viterbo"
    },
    {
    "city": "Vitoria-Gasteiz"
    },
    {
    "city": "Volos"
    },
    {
    "city": "Vrsar"
    },
    {},
    {
    "city": "Waco"
    },
    {
    "city": "Wainscott"
    },
    {
    "city": "Wakefield"
    },
    {
    "city": "Wanchese"
    },
    {
    "city": "Warsaw"
    },
    {
    "city": "Warth"
    },
    {
    "city": "Washington D.C."
    },
    {
    "city": "Water Mill"
    },
    {
    "city": "Waterford"
    },
    {
    "city": "Watertown"
    },
    {
    "city": "Watsonville"
    },
    {
    "city": "Waukegan"
    },
    {
    "city": "Waukesha"
    },
    {
    "city": "Waves"
    },
    {
    "city": "Wellington (New Zealand)"
    },
    {
    "city": "Wellington (U.S.)"
    },
    {
    "city": "Wengen"
    },
    {
    "city": "Weno"
    },
    {
    "city": "West Hampton Dunes"
    },
    {
    "city": "West Lafayette"
    },
    {
    "city": "West Palm Beach"
    },
    {
    "city": "West Wildwood"
    },
    {
    "city": "Westendorf"
    },
    {
    "city": "Westhampton"
    },
    {
    "city": "Westhampton Beach"
    },
    {
    "city": "Westminster"
    },
    {
    "city": "Weston"
    },
    {
    "city": "Wheeling"
    },
    {
    "city": "White Plains"
    },
    {
    "city": "Whitehorse"
    },
    {
    "city": "Wichita"
    },
    {
    "city": "Wichita Falls"
    },
    {
    "city": "Wiesbaden"
    },
    {
    "city": "Wildwood"
    },
    {
    "city": "Wildwood Crest"
    },
    {
    "city": "Wilkes-Barre"
    },
    {
    "city": "Willemstad"
    },
    {
    "city": "Williams"
    },
    {
    "city": "Wilmington (Delaware)"
    },
    {
    "city": "Wilmington (North Carolina)"
    },
    {
    "city": "Winchester"
    },
    {
    "city": "Windhoek"
    },
    {
    "city": "Windsor"
    },
    {
    "city": "Winnipeg"
    },
    {
    "city": "Winslow"
    },
    {
    "city": "Winston–Salem"
    },
    {
    "city": "Winterthur"
    },
    {
    "city": "Wolfsburg"
    },
    {
    "city": "Wollongong"
    },
    {
    "city": "Wolverhampton"
    },
    {
    "city": "Woodburn"
    },
    {
    "city": "Worcester (UK)"
    },
    {
    "city": "Worcester (U.S.)"
    },
    {
    "city": "Worthing"
    },
    {
    "city": "Wrightsville Beach"
    },
    {
    "city": "Wroclaw"
    },
    {
    "city": "Wuppertal"
    },
    {
    "city": "Würzburg"
    },
    {},
    {},
    {
    "city": "Yakima"
    },
    {
    "city": "Yamoussoukro"
    },
    {
    "city": "Yaoundé"
    },
    {
    "city": "Yaren"
    },
    {
    "city": "Yellowknife"
    },
    {
    "city": "Yerevan"
    },
    {
    "city": "Yogyakarta"
    },
    {
    "city": "Yokohama"
    },
    {
    "city": "Yonkers"
    },
    {
    "city": "York (UK)"
    },
    {
    "city": "York (U.S.)"
    },
    {
    "city": "Youngstown"
    },
    {
    "city": "Yuma"
    },
    {},
    {
    "city": "Zadar"
    },
    {
    "city": "Zagreb"
    },
    {
    "city": "Zakopane"
    },
    {
    "city": "Zamboanga City"
    },
    {
    "city": "Zanzibar"
    },
    {
    "city": "Zaragoza"
    },
    {
    "city": "Zell am See"
    },
    {
    "city": "Zell am Ziller"
    },
    {
    "city": "Zermatt"
    },
    {
    "city": "Zug"
    },
    {
    "city": "Zurich"
    },
    {
    "city": "Zwickau"
    },
    {
    "city": "Zwolle"
    }
  ];

  // Init select dog breeds input
  let selectDogBreeds = document.querySelector(".select-dog-breeds");

  for (const [key, value] of Object.entries(dogBreeds)) {

    console.log(key, value);
    let option = document.createElement("option");
    option.setAttribute('value', value.name);

    let optionText = document.createElement('span');
    optionText.innerHTML = value.name;
    option.appendChild(optionText);

    selectDogBreeds.appendChild(option);
  }

  var options = {searchable: true};
  NiceSelect.bind(selectDogBreeds, options);
  // End Init select dog breeds input

  // Init select cities
  let selectCities = document.querySelector(".select-cities");

  for (const [key, value] of Object.entries(cities)) {

    console.log(key, value);
    let option = document.createElement("option");
    option.setAttribute('value', value.city);

    let optionText = document.createElement('span');
    optionText.innerHTML = value.city;
    option.appendChild(optionText);

    selectCities.appendChild(option);
  }

  var options = {searchable: true};
  NiceSelect.bind(selectCities, options);
  // End Init select cities
