
@checkins.each do |checkin|
  json.set! checkin.id do
    json.partial! 'checkin', checkin: checkin
    json.drinkId checkin.drink_id
    json.drinkName checkin.drink.drink_name
    json.createdAt checkin.created_at
    json.barId checkin.drink.bar_id
    json.barName checkin.drink.bar.name
    json.authorId checkin.author_id
    json.authorName checkin.author.username
    # json.author checkin.author
    json.authorImg checkin.author.img_url
    if checkin.photo.attached?
      json.photoURL url_for(checkin.photo)
    end
  end
end