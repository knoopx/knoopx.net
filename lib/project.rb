class Project
  attr_reader :meta, :slug, :path, :url, :body

  def initialize(path)
    raw_meta, body = File.read(path, mode: "rb").force_encoding("utf-8").split("----", 2)
    @meta = YAML.load(raw_meta)
    @body = body.force_encoding("utf-8")
    @slug = self[:name].to_slug.normalize.to_s
    @path = path
    @url = "/projects/#{@slug}"
  end

  def [](key)
    @meta[key.to_s]
  end

  def self.find(slug)
    self.all.find { |a| a.slug == slug }
  end

  def self.all
    Dir.glob("projects/**/*.markdown").
        map { |path| Project.new(path) }.
        reject { |project| project[:draft] == true }.
        sort_by { |project| project[:name] }
  end
end