import { faCartShopping, faFile, faList, faPaw, faPlateWheat, faCode } from '@fortawesome/free-solid-svg-icons';

const project = {
	deliziosa : {
		id:1,
		icon: faPlateWheat,
		name:"deliziosa",
		slug:'deliziosa',
		github:"https://github.com/Zinmoeag/Deliziosa",
		img:"deliziosa/deliziosa.JPG",
		feature:[
			{
				id:1,
				name: "Chef List",
				description : "Here is the chef list. User can check every chef's information by clicking their photo.",
				img : "deliziosa/chef.JPG",
			},
			{
				id:2,
				name: "Items",
				description : "Items list of the application, Each card have add item button to add item  in order section.",
				img : "deliziosa/items.JPG",
			},
			{
				id:3,
				name: "Ordering",
				description : "There is a form that user have to fill their information. In that order form added items is displayed",
				img : "deliziosa/order.JPG",
			},
		],
		category:[
			"frontend",
		],
		description:'Deliziosa is simple static web application. It was developed with Html, Css and vanila Js. After learning Html, css and js (a little), I build this app'
	},	
	todolist: {
		id:2,
		icon:faList,
		name:"todolist",
		slug:'todolist',
		github:"https://github.com/Zinmoeag/TODO_list",
		img:"todo.JPG",
		feature:[
			{
				id:1,
				name: "Edit Feature",
				description : "The user can edit what they have typed before. When the user hits the edit button, input will be enabled.User can freely edit on previous list value",
				img : "todoList/edit&removeFeat.JPG",
			},
		],
		category:[
			"frontend",
		],
		description : 'After learning js programming (I mean basic:) I had an idea to test what I was able to do. So I started to make this simple-to do list. This application was built by Vanila Js, Html, and CSS. To store a to-do list, I choose to use LocalStorage. Delete, edit, and reset to-do lists are supported.'
	},
	creative_coder_testing:{
		id:3,
		icon : faFile,
		name:"creative coder testing",
		slug:'creative_coder_testing',
		img:"creative_coder/productfilter.JPG",
		github:"https://github.com/Zinmoeag/laravel-ccmyn",
		feature:[
			{
				id:1,
				name: "Products filters",
				description : "A multi-query feature is supported in this application. The user can search blogs via a search box and filter by category or artist name.",
				img : "creative_coder/productfilter.JPG",
			},
			{
				id:2,
				name: "Subscribe Feature & leave comments",
				description : "User can subscribe the blog.Users must be authenticated in order to do so. I am not going to show the comment feature picture. The comment feature does the same thing as the other real-world application does., But..but..but..but..,the reply feature on the comment is still developing.",
				img : "creative_coder/blog.JPG",
			},
			{
				id:3,
				name: "Authentication",
				description : "As I mentioned above, users must be authenticated to use some features. So, users need to login or register an account.",
				img : "creative_coder/register.JPG",
			},
			{
				id:4,
				name: "Profile",
				description : "After a user is authenticated, a profile is automatically created for that user. Users can then browse and interact with other user profiles and update their own information on their profile page.",
				img : "creative_coder/profile.JPG",
			},
			{
				id:5,
				name: "Create Blog",
				description : "On this blog website, users can create and publish their own blogs. They also have the ability to edit their own blog posts, and this is where the Wiziwig Editor comes into play.",
				img : "creative_coder/createblog.JPG",
			},
			{
				id:6,
				name: "Admin feature",
				description : "If user is an admin, they gain access to more powerful features, such as blog management.",
				img : "creative_coder/blogmanagement.JPG",
			},
			{
				id:7,
				name: "Reset Features",
				description : "Sometimes, users, like myself, tend to forget their passwords.To assist users in such situations, I added this feature. If you forget email too, this feature might not be not for you :).Users are required to provide their email address for confirmation. If the provided email address is found in the application's database, server will send a link of reset form via email",
				img : "creative_coder/forgetpassword.JPG",
			},
		],
		category:[
			"frontend","backend",
		],
		description : "This application is a class project. This project is developed in the Laravel framework with MySQL. What does this application do? The application is a simple blog website. Artists can post whatever they want; users can subscribe and leave their ideas as comments on the contents; and users can also subscribe to the artist. What did I learn from this project? The basic and intermediate concepts of the Laravel Framework and what a Wiziwig editor are.I will describe each feature of this application in the features session."
	},
	petshop:{
		id:4,
		icon : faPaw,
		name:"petshop",
		slug:'petshop',
		github:"https://github.com/Zinmoeag/Pet-universe",
		img:"petShop/petshop.JPG",
		feature:[
			{
				id:1,
				name: "Pet List",
				description : "Users can access a comprehensive list of available pets for adoption on this website.To express interest in adopting a pet, simply click on the heart button next to the pet's profile.",
				img : "petShop/aboptpet.JPG",
			},
			{
				id:2,
				name: "Volunteer",
				description : "If you're interested in volunteering, you can easily apply on our website. We offer a straightforward application process that allows you to express your desire to contribute to our cause. Your dedication and support are greatly appreciated. You can also see very cool paper plane animation",
				img : "petShop/volunteer.JPG",
			},
			{
				id:3,
				name: "Sponser",
				description : "To ensure the well-being of the dogs we've rescued from abusive situations, we rely on sponsors for their food and care. To involve sponsorship just fill the form",
				img : "petShop/sponser.JPG",
			},
			{
				id:4,
				name: "Donation",
				description : "If you're interested in making a difference, you can contribute by donating essential medicines and supplies to support our rescued pets.",
				img : "petShop/donation.JPG",
			},
			{
				id:5,
				name: "Quotes",
				description : "If you're interested, you can find quotes about pets in the 'Quotes' section. This application provided it with cool slider section.",
				img : "petShop/quote.JPG",
			},
		],
		category:[
			"frontend",
		],
		description : "Pet shop website is a simple static class project.But this version of pet shop is my version. I added some feature of my own. It is developed with Html, Bootstrap and vanila Js. Founder is Dwayne Johnson (riel)"
	},
	laracamp:{
		id:5,
		icon: faCartShopping,
		name:"laracamp(e-commerce)",
		slug:'laracamp',
		github:"https://github.com/lara-camp/e-commerce",
		img:"laracamp/main.JPG",
		feature:[
			{
				id:1,
				name: "Cart feature",
				description : `At first, our cart was not server-based; we used Redux for managing global state and LocalStorage for data persistence. However, we encountered a few issues with a client-based cart. Firstly, when users placed orders from the cart, the client had to send product data, including quantity and product IDs, to validate and store on the server. We preferred not to rely on the client for essential product information. Secondly, although not a critical problem, our application supported two options: 'Add to Cart' or 'Directly Buy.' Managing a buy operation within a client-based cart presented some challenges. As a result, we decided to move the cart logic from the client to the server.
				Users don't need to create an account to access the cart feature; the cart is automatically created when the application starts based on the token stored in LocalStorage.`,
				img : "laracamp/cartFeat.JPG",
			},
			{
				id:2,
				name: "Product page and frontend stock-qty handling system",
				description : `We store fetched cart data in Redux. Dealing with stock quantity by constantly sending requests to the server became frustrating. To address this, we've implemented a solution where we calculate the available stock quantity for a specific product on the frontend based on the cart data`, 				
				img : "laracamp/product.JPG",
			},
			{
				id:3,
				name: "Order Product",
				description : "In order to make purchases through our application, users must have an account. Users can either order products from their cart or make direct purchases. Additionally, users need to provide their delivery address. Our application offers an autofill feature if the user has already updated their profile with their address",
				img : "laracamp/orderingProduct.JPG",
			},
			{
				id:4,
				name: "User Profile & update credentials",
				description : "After a user is authenticated, a profile is automatically created for that user, which includes displaying the order list. Users can update their information such as their address, set a user profile picture, check the orders and update their credentials",
				img : "laracamp/userprofilefeat.JPG",
			},
			{
				id:5,
				name: "Update Profile Information & drag-drop",
				description : "As mentioned previously, users can set any picture they prefer as their profile picture. Our application supports a drag-and-drop feature to enhance the user experience. Please note that the image format must be either JPG or PNG; otherwise, you will not be able to upload the image. Users can also set their address or phone number",
				img : "laracamp/drag&dropfeat.JPG",
			},
			{
				id:6,
				name: "Best Seller",
				description : "For our Best Seller feature, we have implemented a straightforward method. The 'Best Seller' designation is determined based on a simple scoring system. We calculate this score by increasing it when users complete orders, with the score being influenced by the weight like user action and quantity of the ordered products",
			},
		],
		category:[
				"frontend","backend","api",
		],
		description : `This project is Laracamp's take-home project. We developed this app as a team of four members. We decided to use Laravel for the backend and React for the frontend. My main role for this project is frontend development with React. Occasionally, I assist my team with backend tasks. We chose React for its ability to avoid page refresh and its capability to fetch data with JavaScript.
						This application is e-commerce website`
	},
	zodiac:{
		id:6,
		icon:faCode,
		name:"Zodiac",	
		slug:'zodiac',
		github:"https://github.com/Zinmoeag/zodiac",
		img:"zodiac/home.png",
		feature:[
			{
				id:1,
				name: "Zodiacs",
				description : `In the ever-expanding realm of digital applications, a novel feature has emerged that allows users to delve into the intriguing world of astrology. This innovative addition empowers users to explore and understand the behavior and mannerisms associated with each zodiac sign. By simply clicking on a specific sign, users can unlock a wealth of information that provides insights into the distinctive characteristics and traits of individuals born under that sign`,
				img : "zodiac/home.png",
			},
			{
				id:2,
				name: "Sharmal",
				description : `Embark on a personalized astrological journey with the groundbreaking feature "Sharmal Search." Designed to make astrology accessible to everyone, this innovative tool allows users to uncover the mysteries of their zodiac sign by simply typing in their birth date. Named "Sharmal" for its seamless blend of simplicity and astrological depth, this feature promises a quick and insightful way to explore individual characteristics based on celestial alignments.`, 				
				img : "zodiac/sharmal.png",
			},
			{
				id:3,
				name: "Mr Zodiac",
				description : "This unique feature not only uncovers your zodiac-related behavior and manner but also provides an interactive personality assessment with a progress bar which is depended on the percentage of your personality.",
				img : "zodiac/content.png",
			},
		],
		category:[
				"frontend",
		],
		description : `Zodiac ia a mini projects.In this project you can read the behaviour, habit and something like that of each zodiac sign, You can also searh your zodiac sign with your birth date. Only Myanmar Language is supported. So that user can read easily. This application also provided chinese zodiac`
	},
}

export default project