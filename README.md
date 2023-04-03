<p align='center'>
<img width="30%" src='./docs/images/logo.png'>
</p>
<h1>
<p align='center'>
Streetsmart
</p>
</h1>

<p align='center'>
<img src="https://github.com/amal-thundiyil/streetsmart/actions/workflows/actions.yml/badge.svg">
<img src="https://github.com/amal-thundiyil/streetsmart/actions/workflows/deploy.yml/badge.svg">
<a href="https://github.com/amal-thundiyil/streetsmart/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg" > </a>
<img src="https://visitor-badge.laobi.icu/badge?page_id=amal-thundiyil.streetsmart">

## 📌 Introduction



## 🎓 Description

### System Requirements

**Data:**
- Capture details of real time location
- Catalogue of product propositions based on partner offers and banking offers
- Customer consent and preferred channel of contact
- Event store to capture in/out events on customer behaviours
- The offerings sent to the customer via different channels

**Integrations:**
- Application should be able to integrate with Rest Based API to capture the data and store into Database and then send the notifications back to the customers via different channels.
- To create event-based component to send communication to the customers.
 
**Success Criteria:**
- How well the data is captured showcasing details of the customer/offerings/logs etc.
- Good to see a working model of the problem statement via Mobile App highlighting how the offerings are getting changed based on the location/event (in a mall/shop/ATM/Bank etc)
- Be able to send communication to the customers via App Notification/Email

### 🌟 Features
- Onboarding:
  - User authentication
  - User interests/hobbies
  - Payment Gateway requirements
- Home Page:
  - Offers near me
  - Offers just for you
  - Maps for offer density
  - Pokemon Go like layout
- Analytics:
  - Recommendation
  - Transactions based
  - Location based and user based
  - Event based (trigger using payments)
- Notifications (WhatsApp (paid), Mail, Push notifications, SMS)
- Coupon Handling:
  - Affiliates
- Checkout:
  - Coupon/Offer Details
  - Coupon Code or Coins

### 🏰 Architecture

**Technology Stack:** 
- Frontend: Dart, Flutter
- Backend: Python, FastAPI, Apache Kafka
- Data: Pandas, MongoDB
- Cloud: Docker, MongoDB Atlas, Okteto Cloud, Confluent, GitHub Actions

**Services:**
- Ingester:
- Analyzer: uses in / out events as triggers 
- Recommender: 
- User: Authentication, Search etc.

## 🙏 Contributing

Please read [this](CONTRIBUTING.md) before making contributions. To build the app locally with Docker and docker-compose installed:

```sh
docker-compose up --build
```

Please see [asdf](https://asdf-vm.com/guide/getting-started.html#local) for contributing with the [versions](.tool-versions) used during development. You can set the versions using:
```sh
asdf local python
```

## 📝 Future Scope

- [ ] Onboarding system for companies
- [ ] Reward collection (like CRED)
- [ ] E-commerce offerings
