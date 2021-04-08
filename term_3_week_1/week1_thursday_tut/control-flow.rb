# age = 20
# id = false

# if age > 18 && id
#     puts "Welcome in"
# elsif age > 18 && !id
#     puts "Sorry you need ID"
# elsif age < 18
#     puts "you're too young"
# else
#     puts "Bar is closed"
# end


age = 17
puts "Where do you love?"
location = get.chomp

case location
    when "Melbourne"
        puts "Go demons"
    when "Sydney"
        puts "Go Swans"
    when "Adelaide"
        puts "Go crows"
    else 
        puts "Go football"
    end
