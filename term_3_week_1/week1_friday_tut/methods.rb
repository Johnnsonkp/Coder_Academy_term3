# def add(a, b)
#     a + b
# end

# def add_all(...args)
#     args.reduce {|a,b| a + b}
# end

# puts add_all(1, 2, 44, 10);

students = ["Darko", "Ana", "Yuri"]

def greet_all_students(people)
    people.each do |student|
        puts "Hello" + student
    end
end

greet_all_students(students)

