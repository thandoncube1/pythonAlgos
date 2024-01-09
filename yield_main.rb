# This is a method that yields an output

def make_salad
    yield "lettuce"
    yield "carrots"
    yield "olive oil"
end

make_salad { |ingredient| puts "Adding #{ingredient} to make salad!" }

# Yield_Self is different from yield and also yield(self). We use yield_self to chain methods and do something with the object  you're calling  yield_self on.
n_squared = -> (n) { n.pow(2) }

results = 2
.yield_self(&n_squared)
.yield_self(&n_squared)

puts results
