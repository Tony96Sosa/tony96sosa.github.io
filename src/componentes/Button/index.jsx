
// const displayPortfolioButtons = () => {
//   const categories = portfolio.reduce( (values,item) => {
//       if(!values.includes(item.category)){
//           values.push(item.category);
//       }
//       return values;
//   },["all"]);

//   let categoryBtns = categories.map( (category) => {
//       return `<button class="wow filter-btn" 
//       type="button" data-id=${category}>${category}</button>`;
//   });
//   categoryBtns = categoryBtns.join('');
//   containerBtns.innerHTML = categoryBtns;
//   const filterBtns = containerBtns.querySelectorAll(".filter-btn");
//   //Filter Items
//   filterBtns.forEach( (btn) => {
//       btn.addEventListener('click', (e) => {
//           const category = e.currentTarget.dataset.id;
//           const portfolioCategory = portfolio.filter( (portfolioItem) => {
//               if(portfolioItem.category===category){
//                   return portfolioItem;
//               }
//           });
//           if(category==="all"){
//               displayPortfolioItems(portfolio);
//           }else{
//               displayPortfolioItems(portfolioCategory);
//           }
//       });
//   });
// };