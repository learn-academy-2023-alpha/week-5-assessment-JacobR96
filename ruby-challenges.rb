# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Input: and array and a single letter 
# Output:the words with the single letter includded
# Psuedocode: so i want to create a function the can take in 2 pareameters. One parameter is going to be the array of words, and the second parameter is going to be the single letter . the way it will work is by checking the value in each index of the array and using the include? method to see if the index has that letter in it . im thinking about doing an if statment to make this happen 

def the_searcher1 array
array.select do |value|
    value.include? 't'
end
end

def the_searcher2 array
    array.select do |value|
        value.include? 'o'
    end
    end
    

p the_searcher1(beverages_array)   #["tea", "water", "soda water"]
p the_searcher2(beverages_array) #["coffee", "soda water"]


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 





# def hasher_to_array (hash)
# hash.values.flatten.sort
  
#     end
# p hasher_to_array(us_states)




# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# class Bike
#     attr_accessor :model, :wheels, :current_speed ,:faster

# def initialize (model,wheels,current_speed,faster)
# @model = model
# @wheels = wheels
# @current_speed = current_speed
# @faster = faster

# end
# def get_bike_info
#     "My fantastic bike has #{@wheels}  and that makes it easier to get to my cruising speed of #{@current_speed}, i think i might keep this new type of bike, if you want one just google  #{@model}"

# end
# def correct_way
#     "The #{@model} has #{@wheels} and is going #{current_speed}."
# end


# def pedal_faster
# "The bike is now going #{@faster}"

# end

# # def brake


# # end

# end 


# my_bike = Bike.new( "Tesla model Bike","3 wheels", "50 mph","15 Mph")

# p my_bike.get_bike_info
# p my_bike.correct_way
# p my_bike.pedal_faster



# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.










# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
