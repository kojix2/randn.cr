crystal_doc_search_index_callback({"repository_name":"randn","body":"# randn.cr\n\n[![test](https://github.com/kojix2/randn.cr/actions/workflows/ci.yml/badge.svg)](https://github.com/kojix2/randn.cr/actions/workflows/ci.yml)\n[![Docs Latest](https://img.shields.io/badge/docs-latest-blue.svg)](https://kojix2.github.io/randn.cr/)\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     randn:\n       github: kojix2/randn.cr\n   ```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"randn\"\n\nr = Rand.new\n\n# Generate a random number from a normal distribution\n# with mean 0 and standard deviation 1\nr.randn\n# => 0.6308041689636543\n\n# Generate a random number from a normal distribution\n# with mean 10 and standard deviation 2\nr.randn(10, 2)\n# => 11.812242402689735\n\n# missing methods are delegated to `Random` object in the Rand instance \nr.next_bool\n# => true\n```\n\n## Development\n\n- Fork this repository\n- Report bugs\n- Fix bugs and submit pull requests\n- Write, clarify, or fix documentation\n- Suggest or add new features\n\n## Contributing\n\n1. Fork it (<https://github.com/kojix2/randn/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## License\n\nMIT License\n","program":{"html_id":"randn/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"randn","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"randn/Rand","path":"Rand.html","kind":"class","full_name":"Rand","name":"Rand","abstract":false,"superclass":{"html_id":"randn/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"randn/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"randn/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/randn.cr","line_number":9,"url":"https://github.com/kojix2/randn.cr/blob/fc96e033c811c550329600647cdac408307a1c81/src/randn.cr#L9"}],"repository_name":"randn","program":false,"enum":false,"alias":false,"const":false,"constructors":[{"html_id":"new(seed:UInt64,sequence=0_u64)-class-method","name":"new","doc":"Initializes an instance with the given *seed* and *sequence*.","summary":"<p>Initializes an instance with the given <em>seed</em> and <em>sequence</em>.</p>","abstract":false,"args":[{"name":"seed","external_name":"seed","restriction":"UInt64"},{"name":"sequence","default_value":"0_u64","external_name":"sequence","restriction":""}],"args_string":"(seed : UInt64, sequence = 0_u64)","args_html":"(seed : UInt64, sequence = <span class=\"n\">0_u64</span>)","location":{"filename":"src/randn.cr","line_number":19,"url":"https://github.com/kojix2/randn.cr/blob/fc96e033c811c550329600647cdac408307a1c81/src/randn.cr#L19"},"def":{"name":"new","args":[{"name":"seed","external_name":"seed","restriction":"UInt64"},{"name":"sequence","default_value":"0_u64","external_name":"sequence","restriction":""}],"visibility":"Public","body":"_ = allocate\n_.initialize(seed, sequence)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}},{"html_id":"new(random:Random)-class-method","name":"new","doc":"Initializes an instance with the given *random* object.","summary":"<p>Initializes an instance with the given <em>random</em> object.</p>","abstract":false,"args":[{"name":"random","external_name":"random","restriction":"Random"}],"args_string":"(random : Random)","args_html":"(random : Random)","location":{"filename":"src/randn.cr","line_number":25,"url":"https://github.com/kojix2/randn.cr/blob/fc96e033c811c550329600647cdac408307a1c81/src/randn.cr#L25"},"def":{"name":"new","args":[{"name":"random","external_name":"random","restriction":"Random"}],"visibility":"Public","body":"_ = allocate\n_.initialize(random)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}},{"html_id":"new-class-method","name":"new","doc":"Initializes an instance with a random seed.","summary":"<p>Initializes an instance with a random seed.</p>","abstract":false,"location":{"filename":"src/randn.cr","line_number":13,"url":"https://github.com/kojix2/randn.cr/blob/fc96e033c811c550329600647cdac408307a1c81/src/randn.cr#L13"},"def":{"name":"new","visibility":"Public","body":"_ = allocate\n_.initialize\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"randn(mean,std_dev):Float64-instance-method","name":"randn","doc":"Generates a random number from a normal distribution.\n\nThis method generates a random number from a normal distribution with a\ngiven *mean* and standard deviation *std_dev*.\n\n```\nr = Rand.new\nr.randn(0, 1) # => 0.1.9288478880269821\n```","summary":"<p>Generates a random number from a normal distribution.</p>","abstract":false,"args":[{"name":"mean","external_name":"mean","restriction":""},{"name":"std_dev","external_name":"std_dev","restriction":""}],"args_string":"(mean, std_dev) : Float64","args_html":"(mean, std_dev) : Float64","location":{"filename":"src/randn.cr","line_number":72,"url":"https://github.com/kojix2/randn.cr/blob/fc96e033c811c550329600647cdac408307a1c81/src/randn.cr#L72"},"def":{"name":"randn","args":[{"name":"mean","external_name":"mean","restriction":""},{"name":"std_dev","external_name":"std_dev","restriction":""}],"return_type":"Float64","visibility":"Public","body":"mean = mean.to_f\nstd_dev = std_dev.to_f\nif std_dev.negative?\n  raise(\"std_dev must be positive\")\nend\nmean + (std_dev * randn())\n"}},{"html_id":"randn:Float64-instance-method","name":"randn","doc":"Generates a random number from a standard normal distribution.\n\nThis method uses the Box-Muller transform to generate a random number\nfrom a standard normal distribution. The generated number will have a\nmean of 0 and a standard deviation of 1.\n\n```\nr = Rand.new\nr.randn # => 0.1.9288478880269821\n```","summary":"<p>Generates a random number from a standard normal distribution.</p>","abstract":false,"location":{"filename":"src/randn.cr","line_number":43,"url":"https://github.com/kojix2/randn.cr/blob/fc96e033c811c550329600647cdac408307a1c81/src/randn.cr#L43"},"def":{"name":"randn","return_type":"Float64","visibility":"Public","body":"if @iset == 0\n  rsq, v1, v2, fac = 0.0, 0.0, 0.0, 0.0\n  loop do\n    v1 = (2.0 * @random.next_float) - 1.0\n    v2 = (2.0 * @random.next_float) - 1.0\n    rsq = (v1 * v1) + (v2 * v2)\n    if rsq < 1.0 && (rsq != 0.0)\n      break\n    end\n  end\n  fac = Math.sqrt((-2.0 * (Math.log(rsq))) / rsq)\n  @gset = v1 * fac\n  @iset = 1\n  return v2 * fac\nelse\n  @iset = 0\n  return @gset\nend"}},{"html_id":"random:Random-instance-method","name":"random","abstract":false,"location":{"filename":"src/randn.cr","line_number":10,"url":"https://github.com/kojix2/randn.cr/blob/fc96e033c811c550329600647cdac408307a1c81/src/randn.cr#L10"},"def":{"name":"random","return_type":"Random","visibility":"Public","body":"@random"}}],"macros":[{"html_id":"method_missing(call)-macro","name":"method_missing","abstract":false,"args":[{"name":"call","external_name":"call","restriction":""}],"args_string":"(call)","args_html":"(call)","location":{"filename":"src/randn.cr","line_number":31,"url":"https://github.com/kojix2/randn.cr/blob/fc96e033c811c550329600647cdac408307a1c81/src/randn.cr#L31"},"def":{"name":"method_missing","args":[{"name":"call","external_name":"call","restriction":""}],"visibility":"Public","body":"      @random.\n{{ call }}\n\n    \n"}}]}]}})