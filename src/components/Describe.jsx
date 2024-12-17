import { useState } from 'react';
import { motion } from 'framer-motion';

const positions = [
  "second_up",
  "first_up",
  "middle",
  "first_down",
  "second_down",
];

const imageVariants = {
  second_up: { y: "-20%", zIndex: 3, opacity: 0.5 },
  first_up: { y: "5%", zIndex: 4, opacity: 0.5 },
  middle: { y: "50%", zIndex: 5, opacity: 1 },
  first_down: { y: "95%", zIndex: 4, opacity: 0.5 },
  second_down: { y: "120%", zIndex: 3, opacity: 1 },
};

const categories = ['Family', 'Hotel', 'Caterer'];
const subCategories = {
  Family: ['LPG', 'Stove', 'Spare', 'Refill'],
  Hotel: ['LPG', 'Stove', 'Spare', 'Refill'],
  Caterer: ['LPG', 'Stove', 'Spare', 'Refill']
};
const subCategoriesTwo = {
  LPG: ['17Kg', '12Kg'],
  Stove: ['Surya', 'Preeti'],
  Refill: ['Milk', 'Cheese']
};

export default function FormComponent() {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedSubCategoryTwo, setSelectedSubCategoryTwo] = useState('');
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false); // Controls category list visibility
  const [isSubCategoryListOpen, setIsSubCategoryListOpen] = useState(false); // Controls subcategory list visibility
  const [isSubCategoryListOpenTwo, setIsSubCategoryListOpenTwo] = useState(false); // Controls subcategory two list visibility

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory('');
    setSelectedSubCategoryTwo('');
    setIsCategoryListOpen(false); // Close category list after selection
    setIsSubCategoryListOpen(true); // Open subcategory list when category is selected
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setSelectedSubCategoryTwo(''); // Reset subcategoryTwo when subcategory is changed
    setIsSubCategoryListOpen(false); // Close subcategory list after selection
    setIsSubCategoryListOpenTwo(true); // Open subcategoryTwo list when subcategory is selected
  };

  const handleSubCategoryTwoClick = (subCategoryTwo) => {
    setSelectedSubCategoryTwo(subCategoryTwo);
    setIsSubCategoryListOpenTwo(false); // Close subcategoryTwo list after selection
  };

  return (
    <>
      <div className=' h-[500px] bg-red-600 text-white text-6xl'>
        <br />
        <form>
          <div className='flex gap-10 justify-center'>
            <h1>Requirement for</h1>
            <button
              className={`${!selectedCategory ? 'animate-pulse' : ''}`}
              type="button"
              onClick={() => setIsCategoryListOpen(!isCategoryListOpen)}
            >
              <span>{selectedCategory ? selectedCategory : 'Person'} <i className={`fa-solid fa-arrow-down fa-2xs ${!selectedCategory? 'fa-fade':" "}`}></i></span>
            </button>

            {isCategoryListOpen && (
              <motion.ul
                className='text-slate-400 absolute ms-20 mt-7 h-[65px] w-64 overflow-y-auto rounded-md'
                initial="middle"
                animate="middle"
                variants={imageVariants}
              >
                {categories.map((category, index) => (
                  <motion.li
                    key={category}
                    initial="middle"
                    animate={positions[index % positions.length]} // Map index to positions array
                    variants={imageVariants}
                    transition={{ duration: 0.8 }}
                    className="relative h-50 w-50 p-2 hover:bg-red-900 left-0 cursor-pointer rounded-md"
                  >
                    <label onClick={() => handleCategoryClick(category)}>
                      {category}
                    </label>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            <h1>Interested in</h1>
          </div>
          <br />
          {/* sub category */}
          {selectedCategory && (
            <div className='flex justify-center'>
              <button
                type="button"
                onClick={() => setIsSubCategoryListOpen(!isSubCategoryListOpen)}
              >
                <span>{selectedSubCategory ? selectedSubCategory : 'Something'} <i className={`fa-solid fa-arrow-down fa-2xs ${!selectedSubCategory? 'fa-fade' : ''}`}></i></span>
              </button>

              {isSubCategoryListOpen && (
                <motion.ul
                  className='absolute mt-8 ms-96 text-slate-400 h-20 w-64 overflow-y-auto rounded-md '
                  style={{ direction: 'rtl', textAlign: 'left' }} // Move scrollbar to the left, keep text alignment
                  initial="middle"
                  animate="middle"
                  variants={imageVariants}
                >
                  {subCategories[selectedCategory].map((subCategory, index) => (
                    <motion.li
                      key={subCategory}
                      initial="middle"
                      animate={positions[index % positions.length]} // Map index to positions array
                      variants={imageVariants}
                      transition={{ duration: 0.8 }}
                      className="relative h-50 w-50 p-2 hover:bg-red-900 cursor-pointer rounded-md"
                    >
                      <label onClick={() => handleSubCategoryClick(subCategory)}>
                        {subCategory}
                      </label>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
              <h1 className='ms-7'>so I'm looking for</h1>
            </div>
          )}

          {/* subcategory 2 */}
          {selectedSubCategory && (
            <div className='flex justify-center mt-20'>
              <button
  type="button"
  onClick={() => setIsSubCategoryListOpenTwo(!isSubCategoryListOpenTwo)}
>
  <span>
    {selectedSubCategoryTwo ? selectedSubCategoryTwo : 'Content'} 
    <i className={`fa-solid fa-arrow-down fa-2xs ${!selectedSubCategoryTwo ? 'fa-fade' : ''}`}></i>
  </span>
</button>

              {isSubCategoryListOpenTwo && (
                <motion.ul
                  className='absolute mt-5 text-slate-400 ms-20 h-20 w-64 overflow-y-auto rounded-md '
                  initial="middle"
                  animate="middle"
                  variants={imageVariants}
                >
                  {subCategoriesTwo[selectedSubCategory].map((subCategoryTwo, index) => (
                    <motion.li
                      key={subCategoryTwo}
                      initial="middle"
                      animate={positions[index % positions.length]} // Map index to positions array
                      variants={imageVariants}
                      transition={{ duration: 0.8 }}
                      className="relative h-50 w-50 p-2 hover:bg-red-900 left-0 cursor-pointer rounded-md"
                    >
                      <label onClick={() => handleSubCategoryTwoClick(subCategoryTwo)}>
                        {subCategoryTwo}
                      </label>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>
          )}
          
        </form>
        </div>
      <div className={`text-center bg-red-600 ${!(selectedCategory && selectedSubCategory && selectedSubCategoryTwo) ? 'animate-pulse' : ''}`}>
  {selectedCategory && selectedSubCategory && selectedSubCategoryTwo ? (
    <button className="bg-slate-100 hover:bg-slate-100 text-red-600 py-2 px-6 rounded-full text-3xl">
      Let's go
    </button>
  ) : (
    <h1 className="text-white text-3xl">Please select all categories</h1>
  )}
</div>
    </>
  );
}