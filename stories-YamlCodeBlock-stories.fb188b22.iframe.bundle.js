"use strict";(self.webpackChunkyaml_code_block=self.webpackChunkyaml_code_block||[]).push([[748],{"./src/stories/YamlCodeBlock.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomStyle:()=>CustomStyle,Default:()=>Default,WithLineNumbers:()=>WithLineNumbers,__namedExportsOrder:()=>__namedExportsOrder,default:()=>YamlCodeBlock_stories});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),YamlCodeBlock=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/YamlCodeBlock.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(YamlCodeBlock.Z,options),YamlCodeBlock.Z&&YamlCodeBlock.Z.locals&&YamlCodeBlock.Z.locals;var isJsonString=function(str){try{return JSON.parse(str),!0}catch(e){return!1}},formatJsonForDisplay=function(jsonStr){try{var jsonObj=JSON.parse(jsonStr);return JSON.stringify(jsonObj,null,2)}catch(e){return console.error("Error formatting JSON:",e),jsonStr}},copyIcon=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"14",viewBox:"0 0 448 512"},react.createElement("path",{d:"M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"})),YamlCodeBlock_YamlCodeBlock=function(param){var yamlData=param.yamlData,_param_showLineNumbers=param.showLineNumbers,_param_font=param.font,font=void 0===_param_font?"monospace":_param_font,_param_fontColor=param.fontColor,fontColor=void 0===_param_fontColor?"#3f515f":_param_fontColor,_param_backgroundColor=param.backgroundColor,_param_fontSize=param.fontSize,fontSize=void 0===_param_fontSize?"16px":_param_fontSize,_param_maxHeight=param.maxHeight,lines=(isJsonString(yamlData)?formatJsonForDisplay(yamlData):yamlData).split("\n");return react.createElement("div",{className:"yaml-code-container",style:{maxHeight:void 0===_param_maxHeight?"400px":_param_maxHeight,overflow:"scroll",backgroundColor:void 0===_param_backgroundColor?"#f0f0f0":_param_backgroundColor}},react.createElement("button",{className:"copy-button",onClick:function(){navigator.clipboard.writeText(yamlData).then(function(){console.log("YAML data copied to clipboard!")}).catch(function(err){console.error("Failed to copy: ",err)})}},copyIcon),void 0!==_param_showLineNumbers&&_param_showLineNumbers&&react.createElement("div",{className:"line-numbers",style:{fontSize:fontSize,font:font,color:fontColor}},lines.map(function(_,index){return react.createElement("div",{key:index,className:"line-number"},index+1)})),react.createElement("pre",{className:"yaml-code-block",style:{fontSize:fontSize,font:font,color:fontColor}},lines.map(function(line,index){return react.createElement("div",{key:index,className:"code-line"},react.createElement("code",null,line))})))};try{YamlCodeBlock_YamlCodeBlock.displayName="YamlCodeBlock",YamlCodeBlock_YamlCodeBlock.__docgenInfo={description:"",displayName:"YamlCodeBlock",props:{yamlData:{defaultValue:null,description:"",name:"yamlData",required:!0,type:{name:"string"}},showLineNumbers:{defaultValue:{value:"false"},description:"",name:"showLineNumbers",required:!1,type:{name:"boolean"}},font:{defaultValue:{value:"monospace"},description:"",name:"font",required:!1,type:{name:"string"}},fontColor:{defaultValue:{value:"#3f515f"},description:"",name:"fontColor",required:!1,type:{name:"string"}},fontSize:{defaultValue:{value:"16px"},description:"",name:"fontSize",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:{value:"#f0f0f0"},description:"",name:"backgroundColor",required:!1,type:{name:"string"}},maxHeight:{defaultValue:{value:"400px"},description:"",name:"maxHeight",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/YamlCodeBlock.tsx#YamlCodeBlock"]={docgenInfo:YamlCodeBlock_YamlCodeBlock.__docgenInfo,name:"YamlCodeBlock",path:"src/YamlCodeBlock.tsx#YamlCodeBlock"})}catch(__react_docgen_typescript_loader_error){}let YamlCodeBlock_stories={title:"YamlCodeBlock",component:YamlCodeBlock_YamlCodeBlock,argTypes:{yamlData:{control:"text"},showLineNumbers:{control:"boolean"},font:{control:"text"},backgroundColor:{control:"color"}}};var exampleYAML='   doe: "a deer, a female deer"\n    ray: "a drop of golden sun"\n    pi: 3.14159\n    xmas: true\n    french-hens: 3\n    calling-birds:\n    - huey\n    - dewey\n    - louie\n    - fred\n    xmas-fifth-day:\n    calling-birds: four\n    french-hens: 3\n    golden-rings: 5\n    partridges:\n        count: 1\n        location: "a pear tree"\n    turtle-doves: two',Template=function(args){return react.createElement(YamlCodeBlock_YamlCodeBlock,args)},Default=Template.bind({});Default.args={yamlData:exampleYAML};var WithLineNumbers=Template.bind({});WithLineNumbers.args={yamlData:exampleYAML,showLineNumbers:!0};var CustomStyle=Template.bind({});CustomStyle.args={yamlData:exampleYAML,font:"Courier New",backgroundColor:"#333"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <YamlCodeBlock {...args} />",...Default.parameters?.docs?.source}}},WithLineNumbers.parameters={...WithLineNumbers.parameters,docs:{...WithLineNumbers.parameters?.docs,source:{originalSource:"args => <YamlCodeBlock {...args} />",...WithLineNumbers.parameters?.docs?.source}}},CustomStyle.parameters={...CustomStyle.parameters,docs:{...CustomStyle.parameters?.docs,source:{originalSource:"args => <YamlCodeBlock {...args} />",...CustomStyle.parameters?.docs?.source}}};let __namedExportsOrder=["Default","WithLineNumbers","CustomStyle"]},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/YamlCodeBlock.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.yaml-code-container {
  display: flex;
}

.line-numbers {
  flex-shrink: 0; /* Prevent the line numbers from shrinking */
  user-select: none; /* Prevent selection */
  overflow: hidden;
  border-right: 1px solid #ccc; /* Fine gray line */
  padding-right: 10px;
  /* Add other styles such as padding, margin, background, etc. */
}

.yaml-code-block {
  flex-grow: 0; /* Allow the code block to take up remaining space */
  margin: 0;
  padding-left: 10px;
  white-space: pre-wrap;
  /* Your existing styles for the yaml-code-block */
}

.copy-button {
  position: absolute;
  top: 10px;
  right: 10px;
}

.line-number {
  user-select: none;
  /* other styles for line numbers */
}

.line-number,
.code-line {
  line-height: 1.5; /* Example line height, adjust as needed */
  margin: 0;
  padding: 0 5px;
  box-sizing: border-box;
  font-family: monospace;
}
`,"",{version:3,sources:["webpack://./src/YamlCodeBlock.css"],names:[],mappings:"AAAA;EACE,aAAa;AACf;;AAEA;EACE,cAAc,EAAE,4CAA4C;EAC5D,iBAAiB,EAAE,sBAAsB;EACzC,gBAAgB;EAChB,4BAA4B,EAAE,mBAAmB;EACjD,mBAAmB;EACnB,+DAA+D;AACjE;;AAEA;EACE,YAAY,EAAE,oDAAoD;EAClE,SAAS;EACT,kBAAkB;EAClB,qBAAqB;EACrB,iDAAiD;AACnD;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,kCAAkC;AACpC;;AAEA;;EAEE,gBAAgB,EAAE,0CAA0C;EAC5D,SAAS;EACT,cAAc;EACd,sBAAsB;EACtB,sBAAsB;AACxB",sourcesContent:[".yaml-code-container {\n  display: flex;\n}\n\n.line-numbers {\n  flex-shrink: 0; /* Prevent the line numbers from shrinking */\n  user-select: none; /* Prevent selection */\n  overflow: hidden;\n  border-right: 1px solid #ccc; /* Fine gray line */\n  padding-right: 10px;\n  /* Add other styles such as padding, margin, background, etc. */\n}\n\n.yaml-code-block {\n  flex-grow: 0; /* Allow the code block to take up remaining space */\n  margin: 0;\n  padding-left: 10px;\n  white-space: pre-wrap;\n  /* Your existing styles for the yaml-code-block */\n}\n\n.copy-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.line-number {\n  user-select: none;\n  /* other styles for line numbers */\n}\n\n.line-number,\n.code-line {\n  line-height: 1.5; /* Example line height, adjust as needed */\n  margin: 0;\n  padding: 0 5px;\n  box-sizing: border-box;\n  font-family: monospace;\n}\n"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map(function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content}).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]&&(item[1]="@media ".concat(item[2]," {").concat(item[1],"}")),item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));return[content].concat(["/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64)," */")]).join("\n")}return[content].join("\n")}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier:identifier,updater:updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);return api.update(obj),function(newObj){newObj?(newObj.css!==obj.css||newObj.media!==obj.media||newObj.sourceMap!==obj.sourceMap||newObj.supports!==obj.supports||newObj.layer!==obj.layer)&&api.update(obj=newObj):api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}function insertBySelector(insert,style){var target=getTarget(insert);if(!target)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}module.exports=insertBySelector},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}module.exports=insertStyleElement},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}module.exports=setAttributesWithoutAttributes},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){apply(styleElement,options,obj)},remove:function remove(){removeStyleElement(styleElement)}}}module.exports=domAPI},"./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}module.exports=styleTagTransform}}]);
//# sourceMappingURL=stories-YamlCodeBlock-stories.fb188b22.iframe.bundle.js.map