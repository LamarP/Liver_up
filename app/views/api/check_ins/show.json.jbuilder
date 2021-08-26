
json.partial! 'checkin', checkin: @checkin
json.checkin do
  json.partial! '/api/check_ins/checkin', checkin: @checkin
end
# json.drink do
#   json.partial! '/api/drinks/drink', drink: @checkin.drink
#   json.drinkPhotoURL url_for(@checkin.drink.photo) if @checkin.drink.photo.attached?
# end
json.photoURL url_for(@checkin.photo) if @checkin.photo.attached?
# json.author do
#   json.partial! '/api/users/user', user: @checkin.author_id
# end

# json.average_rating @checkin.drink.average_rating
# @checkins.each do |checkin|
#   json.set! checkin.id do
#     json.partial! 'checkin', checkin: checkin
#     json.drinkId checkin.drink_id
#     json.drinkName checkin.drink.drink_name
#     json.createdAt checkin.created_at
#     json.barId checkin.drink.bar_id
#     json.barName checkin.drink.bar.name
#     json.authorId checkin.author_id
#     json.authorName checkin.author.username
#   end
# end