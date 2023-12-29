## Both the task linux as well website task details are included in this readme file.

## Part 1 -- Linux Task
```markdown
# internsctl

## Custom Linux Command (Version: v0.1.0)

### Overview
`internsctl` is a custom Linux command designed to perform various system operations.
It provides functionality related to CPU information, memory information, user management, file operations, and more.

### Usage

#### Installation
Ensure the script is executable:
```bash
chmod +x /path/to/internsctl
```
Make the command accessible system-wide (optional):
```bash
sudo cp /path/to/internsctl /usr/local/bin/
```

#### Command Usage
```bash
internsctl [OPTIONS]
```

### Examples with Screenshots

- Get the version of the command:
```bash
internsctl --version
```
![Screenshot from 2023-12-28 21-05-45](https://github.com/neerajcode34/Xenon_Stack/assets/109073148/311880e4-c4d9-46ff-804f-449e620ccd4b)

- Show usage guidelines:
```bash
internsctl --help
```
![Screenshot from 2023-12-28 21-08-21](https://github.com/neerajcode34/Xenon_Stack/assets/109073148/46533252-0585-4bee-b7b6-b87511c3c3b1)

- Show Command Manual
```bash
internsctl --man
```
![Screenshot from 2023-12-28 21-06-50](https://github.com/neerajcode34/Xenon_Stack/assets/109073148/3f048e25-fabf-4bcd-b526-29ca3e0e7289)

- Get CPU information:
```bash
internsctl cpu getinfo
```
![Screenshot from 2023-12-28 21-09-32](https://github.com/neerajcode34/Xenon_Stack/assets/109073148/3c19c583-1f91-4f17-a5b0-0e63ed7339f8)

- Get Memory information:
```bash
internsctl memory getinfo
```
![Screenshot from 2023-12-28 21-10-13](https://github.com/neerajcode34/Xenon_Stack/assets/109073148/2433618e-8269-48c9-b66f-9ec61fb94601)

- Create a new user:
```bash
internsctl user create user1
```
![Screenshot from 2023-12-28 21-13-32](https://github.com/neerajcode34/Xenon_Stack/assets/109073148/cdf36deb-6052-4f9f-9ddd-bc1dfcb96498)

- List all regular users:
```bash
internsctl user list
```
![Screenshot from 2023-12-28 21-15-20](https://github.com/neerajcode34/Xenon_Stack/assets/109073148/d6eefc38-5472-4d8a-bc1e-b1b034d92d7f)

- List users with sudo permissions:
```bash
internsctl user list --sudo-only
```
![Screenshot from 2023-12-28 21-16-18](https://github.com/neerajcode34/Xenon_Stack/assets/109073148/00666c82-caee-4794-989d-e290a5460a43)

## Part 2 -- website Task
# Mobile Selling Website

## Deployed Website Link
[Mobile Selling Website](https://neerajcode34.github.io/Xenon-Stack/products.html)

### Screenshots

- Home Page
![Screenshot 2023-12-29 092740](https://github.com/neerajcode34/Xenon_Stack/assets/109073148/b1148ac0-eacf-484e-a254-fec0ab115e5d)

- Products Page
![screencapture-neerajcode34-github-io-Xenon-Stack-products-html-2023-12-29-09_32_23](https://github.com/neerajcode34/Xenon_Stack/assets/109073148/463e0b00-e86b-43fa-88e2-be2014692181)

- Contact Page
![Screenshot 2023-12-29 093321](https://github.com/neerajcode34/Xenon_Stack/assets/109073148/94072a63-feea-4197-9699-1894cea9a203)

- Login Page
![Screenshot 2023-12-29 093517](https://github.com/neerajcode34/Xenon_Stack/assets/109073148/06bbcd24-35b1-429a-a2b6-ef0550c9ddb0)

### Overview
This is a simple Mobile Selling Website that allows users to explore and purchase mobile phones. 
The project includes frontend components (HTML, CSS, JavaScript) and a basic backend implemented with Node.js and MongoDB.

### Technologies Used

#### Frontend
- HTML5
- CSS3
- JavaScript
- Swiper.js for image slider

#### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)

### How to Run Locally

#### Prerequisites
- Node.js installed
- MongoDB Atlas account (for database)

#### Steps
1. Clone the repository:
```bash
git clone https://github.com/your-username/mobile-selling-website.git
cd mobile-selling-website
```
2. Install Dependencies:
```bash
npm install
```
3. Set up Environment Variables:
   - Create a `.env` file in the root of the project and add the following:
     ```
     MONGODB_URI=your_mongodb_atlas_uri
     ```
4. Run the Application:
```bash
npm start
```
5. The app should be running at http://localhost:3000.

#### Access the Website
Open your browser and navigate to http://localhost:3000 to access the Mobile Selling Website.

#### Additional Notes
- The database connection is established using the MongoDB Atlas service.
- Make sure to replace `your_mongodb_atlas_uri` with your actual MongoDB Atlas connection URI.
```
