@bars.each do |bar|
  json.set! bar.id do
    json.partial! 'bar', bar: bar  
  end
end