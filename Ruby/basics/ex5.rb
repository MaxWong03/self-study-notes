def self_intro(name, age, height, weight, eye_color, hair_color)
  return "My name is #{name} and I am #{age} years old. I am #{height.to_f} tall and weigh #{to_kg(weight)}. My eyes are #{eye_color} and my hair is #{hair_color}
  "
end

def to_kg(weight)
  return (weight / 2.2).round(2)
end

puts self_intro("Max", 26, 175, 155, "brown", "black")
