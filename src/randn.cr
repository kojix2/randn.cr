require "random"

# `Rand` is a random number generator that provides methods for generating
# random numbers from normal distributions.
#
# missing methods are forwarded to the `Random` object. So you can use all
# methods from the `Random` class with the given seed.

class Rand
  getter random : Random #

  # Initializes an instance with a random seed.
  def initialize
    r = Random.new
    initialize(random: r)
  end

  # Initializes an instance with the given *seed* and *sequence*.
  def initialize(seed : UInt64, sequence = 0_u64)
    r = Random.new(seed, sequence)
    initialize(random: r)
  end

  # Initializes an instance with the given *random* object.
  def initialize(random : Random)
    @random = random
    @iset = 0.to_i32
    @gset = 0.to_f64
  end

  forward_missing_to @random

  # Generates a random number from a standard normal distribution.
  #
  # This method uses the Box-Muller transform to generate a random number
  # from a standard normal distribution. The generated number will have a
  # mean of 0 and a standard deviation of 1.
  #
  # ```
  # r = Rand.new
  # r.randn # => 0.1.9288478880269821
  # ```
  def randn : Float64
    if @iset == 0
      rsq, v1, v2, fac = 0.0, 0.0, 0.0, 0.0
      loop do
        v1 = 2.0 * @random.next_float - 1.0
        v2 = 2.0 * @random.next_float - 1.0
        rsq = v1 * v1 + v2 * v2
        break if rsq < 1.0 && rsq != 0.0
      end

      fac = Math.sqrt(-2.0 * Math.log(rsq) / rsq)
      @gset = v1 * fac
      @iset = 1
      return v2 * fac
    else
      @iset = 0
      return @gset
    end
  end

  # Generates a random number from a normal distribution.
  #
  # This method generates a random number from a normal distribution with a
  # given *mean* and standard deviation *std_dev*.
  #
  # ```
  # r = Rand.new
  # r.randn(0, 1) # => 0.1.9288478880269821
  # ```
  def randn(mean, std_dev) : Float64
    mean = mean.to_f
    std_dev = std_dev.to_f
    raise "std_dev must be positive" if std_dev.negative?
    mean + std_dev * randn()
  end
end
