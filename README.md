### Installation
*Pre-requisites: [Node.js](http://node.js/download)*

**Step 1:** Install jspm CLI and serveglobally
```javascript
npm install -g jspm
npm install -g serve
```

**Step 2:** Install node modules and jspm packages
```javascript
npm install
jspm install
```

**Step 3:** Start server
```javascript
npm run serve
```
(starts the server at http://localhost:3000)

###Build for Production

#####Arithmetic bundles (App + Vendor)
```javascript
npm run build
```
*Visit http://localhost:3000/index-prod1.html*

#####Self executing bundle
```javascript
npm run buildSfx
```
*Visit http://localhost:3000/index-prod1.html*
