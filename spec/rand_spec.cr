require "./spec_helper"

describe Rand do
  it "should generate a random number from the normal distribution" do
    r = Rand.new
    r.randn.should be_a(Float64)
  end

  it "should generate a random number from the normal distribution " \
     "with a given seed" do
    r = Rand.new(1234)
    a = r.randn
    a.should eq 0.7729497017158719
  end

  it "should generate a random number from the normal distribution " \
     "with a given mean and standard deviation" do
    r = Rand.new
    a = r.randn(100, 10)
    a.should be_a(Float64)
  end

  it "should generate a random number from the normal distribution " \
     "with a given seed, mean, and standard deviation" do
    r = Rand.new(1234)
    a = r.randn(100, 10)
    a.should eq 107.72949701715872
  end

  it "should generate random numbers from the normal distribution " \
     "with a given seed, mean, and standard deviation" do
    r = Rand.new(1234)
    a = Array.new(10000) { r.randn(100, 10) }
    m = a.sum / a.size
    m.should be_close(100, 1)
    sd = Math.sqrt(a.map { |x| (x - m) ** 2 }.sum / a.size)
    sd.should be_close(10, 0.1)
  end

  it "should generate a random number (float64)" do
    r = Rand.new
    a = r.rand
    a.should be_a(Float64)
  end

  it "should generate random numbers (float64)" do
    r = Rand.new(1234)
    a = Array.new(10000) { r.rand }
    a.min.should be >= 0
    a.max.should be <= 1
    (a.sum / a.size).should be_close(0.5, 0.2)
    a[0..2].should eq [0.23669194799424767, 0.7577886331277144, 0.5400402402367691]
  end

  it "should generate a random number (Int32)" do
    r = Rand.new
    a = r.rand(100)
    a.should be_a(Int32)
  end

  it "should generate random numbers (Int32)" do
    r = Rand.new(1234)
    a = Array.new(10000) { r.rand(100) }
    a.min.should be >= 0
    a.max.should be < 100
    (a.sum / a.size).should be_close(50, 2)
    a[0..4].should eq [82, 93, 13, 31, 50]
  end

  it "should generate a random boolean" do
    r = Rand.new
    a = r.next_bool
    a.should be_a(Bool)
  end

  it "should generate random booleans with a given seed" do
    r = Rand.new(1234)
    a = Array.new(100) { r.next_bool }
    a.count(true).should eq 58
    a.count(false).should eq 42
    a[0..4].should eq [false, true, true, true, false]
  end
end
