title: Deliver Pivotal Tracker stories on deploy
created_at: 2011-11-03
----

The original Capistrano recipe from the original [pivotal labs blog post](http://pivotallabs.com/users/miked/blog/articles/702-deliver-tracker-stories-from-capistrano) broke when updating Active Resource to version 3.1.
Here's an updated version:

~~~ ruby
# set :pivotal_tracker_project_id, "XXXXX"
# set :pivotal_tracker_token, "XXXXX"

require 'active_resource'
require 'sax-machine'

module PivotalTracker
  class Story < ActiveResource::Base
    self.site = "http://www.pivotaltracker.com/services/v2/projects/:project_id"
    self.format = :xml
    self.element_name = "story"
    self.collection_name = "stories"

    include SAXMachine
    element :name
    element :story_type
    element :estimate
    element :description
  end

  class Stories
    include SAXMachine
    elements :story, :as => :stories, :class => Story
  end
end

namespace :pivotal_tracker do
  desc "deliver your project's 'finished' stories"
  task :deliver_stories do
    PivotalTracker::Story.headers['X-TrackerToken'] = pivotal_tracker_token
    puts "    delivering tracker stories ..."
    response = PivotalTracker::Story.put(:deliver_all_finished, :project_id => pivotal_tracker_project_id)
    doc = PivotalTracker::Stories.parse(response.body)
    doc.stories.each do |story|
      puts "    - #{story.story_type}: #{story.name} (#{story.estimate} points)"
    end
    puts "    delivered #{doc.stories.length} stories"
  end
end
~~~