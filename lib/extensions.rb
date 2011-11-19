module Nanoc3
  class Item
    def slug_from(attr)
      require 'babosa'
      raise Exception.new("#{attr} for item #{self.identifier} not set") unless self.attributes.include?(attr)
      self[attr].to_slug.normalize.to_s
    end

    def created_at_path_segment(format="%Y/%m/%d")
      raise Exception.new(":created_at for item #{self.identifier} not set") unless self.attributes.include?(:created_at)
      self[:created_at].to_date.strftime(format)
    end
  end
end