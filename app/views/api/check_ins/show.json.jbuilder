
json.partial! 'checkin', checkin: @checkin
json.checkin do
  json.partial! '/api/check_ins/checkin', checkin: @checkin
end

json.photoURL url_for(@checkin.photo) if @checkin.photo.attached?

