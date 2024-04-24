# The Rand class generates random numbers from a normal distribution.

class Rand
  def initialize
    r = Random.new
    initialize(random: r)
  end

  def initialize(seed : UInt64)
    r = Random.new(seed)
    initialize(random: r)
  end

  def initialize(random : Random)
    @random = random
    @iset = 0.to_i32
    @gset = 0.to_f64
  end

  # Generates a random number from a standard normal distribution.
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

  # Generates a random number from a normal distribution with the specified mean and standard deviation.
  def randn(mean, std_dev) : Float64
    mean = mean.to_f
    std_dev = std_dev.to_f
    raise "std_dev must be positive" if std_dev.negative?
    mean + std_dev * randn()
  end

  # These methods are start with an underscore to avoid conflicts with the built-in rand methods.

  def _rand : Float64
    @random.next_float
  end

  def _rand(n : Int32) : Int32
    (@random.next_float * n).to_i
  end

  def rand_bool : Bool
    @random.next_bool
  end
end
