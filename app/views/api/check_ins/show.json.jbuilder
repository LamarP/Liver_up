
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
