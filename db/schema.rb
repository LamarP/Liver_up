# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_14_183106) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bars", force: :cascade do |t|
    t.string "name", null: false
    t.string "location", null: false
    t.string "style", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_bars_on_name"
  end

  create_table "drinks", force: :cascade do |t|
    t.string "drink_name", null: false
    t.string "description", null: false
    t.integer "abv", null: false
    t.string "base_spirit", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "bar_id"
    t.index ["drink_name"], name: "index_drinks_on_drink_name"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "body", null: false
    t.float "rating", null: false
    t.integer "author_id", null: false
    t.integer "drink_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["drink_id"], name: "index_reviews_on_drink_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
