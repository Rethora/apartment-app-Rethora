# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# TODO: add user seeds


user_one_apartments = [
  {
    street: '6345 Gullstrand St',
    city: 'San Diego',
    state: 'CA',
    manager: 'Property Services',
    email: 'info@propertysrv.com',
    price: '$4,875 - $5,075',
    bedrooms: 2,
    bathrooms: 2,
    pets: 'none',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    street: '702 Broadway',
    city: 'San Diego',
    state: 'CA',
    manager: 'GreyStar',
    email: 'Info@DiegaByBosa.com',
    price: '$3,689 - $7,157',
    bedrooms: 2,
    bathrooms: 2,
    pets: 'allowed',
    image: 'https://images.unsplash.com/photo-1523192193543-6e7296d960e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
]

user_two_apartments = [
  {
    street: '4655 Governor Dr',
    city: 'San Diego',
    state: 'CA',
    manager: 'Property Services',
    email: 'info@propertysrv.com',
    price: '$3,207',
    bedrooms: 1,
    bathrooms: 1,
    pets: 'allowed',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    street: '600 Front St',
    city: 'San Diego',
    state: 'CA',
    manager: 'GreyStar',
    email: 'Info@DiegaByBosa.com',
    price: '$3,700',
    bedrooms: 1,
    bathrooms: 1,
    pets: 'none',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80'
  }
]

user_one = User.create(
  email: 'test1@xxx.xxx', 
  password: '123456',
  password_confirmation: '123456'
)

user_two = User.create(
  email: 'test2@xxx.xxx', 
  password: '123456',
  password_confirmation: '123456'
)

user_one_apartments.each do |attr|
  user_one.apartments.create attr
end

user_two_apartments.each do |attr|
  user_two.apartments.create attr
end
