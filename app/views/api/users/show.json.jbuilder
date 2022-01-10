json.partial! "api/users/user", user: @user

json.checkins do
  @user.check_ins.each do |checkin|
    json.set! checkin.id do
      json.partial! '/api/check_ins/checkin', checkin: checkin
      json.drink do
        json.partial! '/api/drinks/drink', drink: checkin.drink
      end

      json.user do
        json.partial! '/api/users/user', user: checkin.author
      end
    end
  end
end

json.photoURL url_for(@user.photo) if @user.photo.attached?