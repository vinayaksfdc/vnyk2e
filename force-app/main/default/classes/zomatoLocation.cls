public class zomatoLocation {

    public List<Location_suggestions> location_suggestions;
    public String status;
    public Integer has_more;
    public Integer has_total;

    public class Location_suggestions {
        public String entity_type;
        public Integer entity_id;
        public String title;
        public Double latitude;
        public Double longitude;
        public Integer city_id;
        public String city_name;
        public Integer country_id;
        public String country_name;
    }
    
    public static zomatoLocation parse(String json) {
        return (zomatoLocation) System.JSON.deserialize(json, zomatoLocation.class);
    }
}