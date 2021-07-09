
# json.partial! 'checkin', checkin: @checkin
json.checkin do
  json.partial! '/api/check_ins/checkin', checkin: @checkin
end

# json.author do
#   json.partial! '/api/users/user', user: @checkin.author_id
# end

# json.average_rating @checkin.drink.average_rating