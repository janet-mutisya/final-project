# Poultry Agritech API Specification

## **Authentication API**
`POST /api/auth/register` → Register a farmer  
`POST /api/auth/login` → Login with email & password  
`GET /api/user/profile` → Get user profile  
`PUT /api/user/profile` → Update profile details  

## **Market Match API**
`GET /api/market/prices` → Fetch current market prices  
`GET /api/market/match` → Find local buyers  

## **Service Listings API**
`POST /api/services/` → Create a poultry service  
`GET /api/services/` → Get all poultry service listings  
`PUT /api/services/:id` → Update a service  
`DELETE /api/services/:id` → Delete service listing  

---
