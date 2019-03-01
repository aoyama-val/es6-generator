generator = Enumerator.new {|yielder|
  n = 1
  loop do
    yielder.yield n
    n += 1
  end
}

generator.each do |n|
  puts n
end
