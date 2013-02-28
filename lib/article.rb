class Article
  attr_reader :meta, :slug, :path, :url, :body

  def initialize(path)
    raw_meta, @body = File.read(path, mode: "rb").force_encoding("utf-8").split("----", 2)
    @meta = YAML.load(raw_meta)
    @slug = self[:title].to_slug.normalize.to_s
    @path = path
    @url = "/%04d/%02d/%02d/%s" % [self[:created_at].year, self[:created_at].month, self[:created_at].day, @slug]
  end

  def [](key)
    @meta[key.to_s]
  end

  class << self
    def find(slug)
      self.all.find { |a| a.slug == slug }
    end

    def all
      Dir.glob("articles/**/*.markdown").
          map { |path| Article.new(path) }.
          reject { |article| article[:draft] == true }.
          sort_by { |article| article[:created_at] }.reverse
    end

    def by_date
      self.all.group_by do |article|
        created_at = article[:created_at]
        [created_at.year, created_at.month]
      end
    end
  end
end