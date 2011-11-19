title: Coding conventions
draft: true
created_at: 2011-10-28
----

You may not like all rules presented here, but they work very well for
Wuaki and have helped producing high quality code. Everyone is free to
code however they want, write and follow their own style guides, but
when you contribute to Wuaki code, please follow these rules:

## Development Workflow

* Branch from `devel` if its a new feature or from `master` if it's a bug present on production environment.
* Develop and commit changes as many times as needed (including tests that validate your feature)
* Once finished rebase interactively from `origin/devel` squashing unnecessary commits
* Manually validate your work, then execute automated tests.
* Finally push your branch to `origin` and send a pull request to project maintainer.
* **NEVER** directly merge and push yourself the branch into `devel` or `master` unless approved to do so.
  Project maintainer/product owners are the ones who define how the work should be merged depending on the release plan.
* Use [Jenkins](http://dev.wuaki.tv) and [GitHub](http://github.com/wuakitv/wuakitv) to follow your team mates development.

## Syntax

 * Avoid usage old-school C-based syntax
 * Perl-style operators are preferred over C-style ones, specially combined with `if` and `unless` statements: `and`, `or` vs `&&`, `||`

 * Use brackes only for single-line defs, `do`, `end` statements otherwise

		collection.each{ |i| puts i }
		collection.each do |item|
		  # large implementation here
		end

 * Widely use `if`, `unless`, `present?`, `nil?`, `Hash#fetch`, etc... in short terms learn to profit from `ActiveSupport`.

		# correct
		puts "hello" unless greeted?

		# wrong
		if !(greeted?)
			puts "hello"
		end

 * Avoid return where not required.

 * Use def with parentheses when there are arguments.

		def my_method(arg)
		end

 * Never use `for`, unless you exactly know why.
 * Avoid multiline `condition ? action : another`, use `if condition action else another`.
 * Use parens only when they make things easier to read

		# incorrect
		if (a == 1)
		  puts "hi!"
		end

		# correct
		method_one(method_two(param1), param2)

 * Split large method definitions into smaller methods.
 * Don't over-design

		def my_method(opts = {})
		  if opts.has_key?(:my_key)
		    one_method
		  else
		    another_method
		  end
		end

 * Refactor only when needed, p.e.: refactor code block only if it is being used several times across the project.
 * Do not define new view helpers unless widely used across distinct views.
 * Do not refactor something if you don't know how it works or what it does.

## Formatting:

* Use ASCII (or UTF-8, if you have to).
* Use 2 space indent, no tabs.
* Use Unix-style line endings.
* Avoid trailing whitespace.
* Separate method/class definitions using a single line break
* Use spaces around operators, after commas, colons and semicolons, around { and before }.
* Use empty lines to break up a long method into logical paragraphs.
* Keep lines fewer than 80 characters.

## Naming:

* Use english for everything: method names, class names, comments, commit messages, documentation... EVERYTHING!
* No documentation is needed if the code is auto-explanatory. The best documentation is the code itself.
* Use snake_case for methods.
* Use CamelCase for classes and modules. (Keep acronyms like HTTP, RFC, XML uppercase.)
* Use SCREAMING_SNAKE_CASE for other constants.
* When defining binary operators, name the argument "other".
* Prefer `map` over `collect`, `find` over `detect`, `select` over `find_all`, `reject` over `select{|a| !a}`, `size` over `length`.
* Boolean methods should end with `?` and **never** be prefixed with `is_` or `has_`, etc...

		# correct
		user.signed_in?

		# incorrect
		user.is_signed_in
		user.is_signed_in?

* Define methods/classes with meaningful names

		# correct
		current_user = User.find_by_session_id(param[:session_id]

		def signed_in?
			current_user.present?
		end

		# incorrect
		u = User.find_by_sid(param[:sid]
		def signed
			!(u == nil)
		end

* Avoid superfluous comments.
* Avoid unnecessary comments.

		# returns true
		def my_method
			return true
		end

## Specs

 * Do not write helper macros, write rspec matchers. (DRY)

		# correct
		you.should make_my_life_easier
		you.should_not make_my_life_easier
		# wrong
		should_make_my_life_easier(you)
		should_not_make_my_life_easier(you)

 * Avoid `Factory` use `create`, `build` or `mock`
 * Understand nested context, and how `before(:all)` and `before(:each)` are executed.
 * We use rspec, so be idiomatic and use rspec-syntax **ALWAYS**. Usage of `assert_*` is completely forbidden.
 * Focus on what you are testing, then focus on test execution speed.
 * Write acceptance and unit tests accordingly, they do not test the same things.
 * Split large specs into contexts into different files
 * Always suffix specs with `_spec.rb`
 * A context setup should not take more than 5 lines of code.
 * Setup your contexts using `let(:var) { :my_value }`
 * Stub and mock when it's possible instead of factoring or hacking application parameters.
 * Use the smallest sample set needed for validating a feature, don't factory 5 movies if you are just testing a boolean flag, you just need 2 movies.

## General:

* Write ruby -w safe code.
* Avoid hashes-as-optional-parameters.  Does the method do too much?
* Avoid long methods.
* Avoid long parameter lists.
* Use def self.method to define singleton methods.
* User `class << self` to define multiple singleton methods.
* Avoid `alias` when `alias_method` will do.
* Avoid `alias_method` when `alias_method_chain` will do.
* Write for 1.8, but avoid doing things you know that will break in 1.9.
* Avoid needless metaprogramming/monkeypatching.
* Code in a functional way, avoid mutation when it makes sense.
* Do not mutate arguments unless that is the purpose of the method.
* Do not mess around in core classes when writing libraries.
* Keep the code simple.
* Don't overdesign.
* Don't underdesign.
* Avoid bugs.
* Read other style guides and apply the parts that don't dissent with this list.
* Use common sense.
* Be consistent, if you change your mind, refactor everything you done before.
* Read.