require 'active_support/all'

require 'helpers/output_helpers'
require 'helpers/tag_helpers'

module Helpers
  include TagHelpers
  include OutputHelpers

  def link_to(content, href, opts = {})
    content_tag(:a, content, opts.merge(:href => href))
  end
  end

  def google_analytics(account)
    <<-ANALYTICS
  <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', '#{account}']);
    _gaq.push(['_trackPageview']);
    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  </script>
    ANALYTICS
  end

  def distance_of_time_in_words(from_time, to_time = 0, include_seconds = false)
    from_time = from_time.to_time if from_time.respond_to?(:to_time)
    to_time = to_time.to_time if to_time.respond_to?(:to_time)
    distance_in_minutes = (((to_time - from_time).abs)/60).round
    distance_in_seconds = ((to_time - from_time).abs).round

    messages = {
        :half_a_minute => "half a minute",
        :less_than_x_seconds => "less than %d seconds",
        :x_seconds=>"%d seconds",
        :less_than_x_minutes=> "less than %d minutes",
        :x_minutes=>"%d minutes",
        :about_x_hours=>"about %d hours",
        :x_days=>"%d days",
        :about_x_months=>"about %d months",
        :x_months=>"%d months",
        :about_x_years=>"about %d year",
        :over_x_years=>"over %d years"
    }

    case distance_in_minutes
      when 0..1

        return distance_in_minutes == 0 ?
            format(messages[:less_than_x_minutes], 1) :
            format(messages[:x_minutes], distance_in_minutes) unless include_seconds

        case distance_in_seconds
          when 0..4 then
            format(messages[:less_than_x_seconds], 5)
          when 5..9 then
            format(messages[:less_than_x_seconds], 10)
          when 10..19 then
            format(messages[:less_than_x_seconds], 20)
          when 20..39 then
            messages(:half_a_minute)
          when 40..59 then
            format(messages[:less_than_x_minutes], 1)
          else
            format(messages[:x_minutes], 1)
        end

      when 2..44 then
        format(messages[:x_minutes], distance_in_minutes)
      when 45..89 then
        format(messages[:about_x_hours], 1)
      when 90..1439 then
        format(messages[:about_x_hours], (distance_in_minutes.to_f / 60.0).round)
      when 1440..2529 then
        format(messages[:x_days], 1)
      when 2530..43199 then
        format(messages[:x_days], (distance_in_minutes.to_f / 1440.0).round)
      when 43200..86399 then
        format(messages[:about_x_months], 1)
      when 86400..525599 then
        format(messages[:x_months], (distance_in_minutes.to_f / 43200.0).round)
      else
        distance_in_years = distance_in_minutes / 525600
        minute_offset_for_leap_year = (distance_in_years / 4) * 1440
        remainder = ((distance_in_minutes - minute_offset_for_leap_year) % 525600)
        if remainder < 131400
          format(messages[:about_x_years], distance_in_years)
        elsif remainder < 394200
          format(messages[:over_x_years], distance_in_years)
        else
          format(messages[:almost_x_years], distance_in_years + 1)
        end
    end
  end

  def experience_duration(start_date, end_date)
    "#{start_date.strftime("%B, %Y")} - #{end_date.strftime("%B, %Y")} (#{distance_of_time_in_words(start_date, end_date)})"
  end

  def age(date)
    ((Date.today.to_time - date.to_time) / 31556926).ceil
  end
end