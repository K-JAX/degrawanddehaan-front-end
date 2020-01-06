import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

/**
 * GraphQL page query that takes a page slug as a uri
 * Returns the title and content of the page
 */
const PAGE_QUERY = gql`
  query PageQuery($uri: String!) {
    pageBy(uri: $uri) {
      title
      content
    }
  }
`;

const PROJ_QUERY = gql`
  query ProjectQuery {
    projects {
      edges {
        node {
          title
          slug
          content
        }
      }
    }
  }
`;


/**
 * Fetch and display a Page
 */
class Portfolio extends Component {
  state = {
    page: {
      title: '',
      content: '',
    },
    projects: []
  };

  componentDidMount() {
    this.executePageQuery();
    this.executeProjectQuery();
  }

  componentDidUpdate( prevProps ) {
    let { props } = this;
    if(props.match.params.slug !== prevProps.match.params.slug){
      this.executePageQuery();
      this.executeProjectQuery();
    }
  }  
  
  /**
   * Execute page query, process the response and set the state
   */
  executePageQuery = async () => {
    const { match, client } = this.props;
    let uri = match.params.slug;
    if (!uri) {
      uri = 'welcome';
    }
    const result = await client.query({
      query: PAGE_QUERY,
      variables: { uri },
    });
    const page = result.data.pageBy;
    this.setState({ page });
  };

  executeProjectQuery = async () => {
    const { match, client } = this.props;
    const result = await client.query({
      query: PROJ_QUERY,
    });
    let projects = result.data.projects.edges;
    projects = projects.map(project => {
      const finalLink = `/portfolio/${project.node.slug}`;
      const modifiedProject = { ...project };
      modifiedProject.node.link = finalLink;
      return modifiedProject;
    });
    this.setState({ projects });
  }
  
  render() {
    const { page, projects } = this.state;
    return (
      <div style={{marginLeft: '315px'}}>
        <h1>Portfolio</h1>
        <p>{JSON.stringify(page)}</p>
        <div className="pa2">
          <h1>{page.title}</h1>
        </div>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: page.content,
          }}
        />
        <div>
          <h2>Lets check some more shit right here then.</h2>
          <ul>
            { projects.map((project) => 
              <Link to={project.node.link}>
                <li>{project.node.title}</li>
              </Link>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default withApollo(Portfolio);
