
const Search = ({ClassName}) => {
    return (
        <div>
            <input type="text" placeholder='Search' className={`w-full px-4 py-1 rounded-full ${ClassName}`} />
            
        </div>
    );
};

export default Search;