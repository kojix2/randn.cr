# randn.cr

[![test](https://github.com/kojix2/randn.cr/actions/workflows/ci.yml/badge.svg)](https://github.com/kojix2/randn.cr/actions/workflows/ci.yml)
[![Docs Latest](https://img.shields.io/badge/docs-latest-blue.svg)](https://kojix2.github.io/randn.cr/)

## Installation

1. Add the dependency to your `shard.yml`:

   ```yaml
   dependencies:
     randn:
       github: kojix2/randn.cr
   ```

2. Run `shards install`

## Usage

```crystal
require "randn"

r = Rand.new

# Generate a random number from a normal distribution
# with mean 0 and standard deviation 1
r.randn
# => 0.6308041689636543

# Generate a random number from a normal distribution
# with mean 10 and standard deviation 2
r.randn(10, 2)
# => 11.812242402689735

# missing methods are delegated to `Random` object in the Rand instance 
r.next_bool
# => true
```

## Development

- Fork this repository
- Report bugs
- Fix bugs and submit pull requests
- Write, clarify, or fix documentation
- Suggest or add new features

## Contributing

1. Fork it (<https://github.com/kojix2/randn/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## License

MIT License
